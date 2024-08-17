const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const secretKey = 'your_secret_key';

// In-memory user store (use a database like MongoDB for production)
const users = [];

// Middleware to authenticate and verify JWT token
function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Middleware to authorize based on user roles
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.sendStatus(403);
        }
        next();
    };
}

// Register route
app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: users.length + 1, username, password: hashedPassword, role };
    
    if(role=="admin"){
        users.push(user);
    res.status(201).send('Admin registered');
    }else if(role=="user"){
        users.push(user);
        res.status(201).send('User registered');        
    }else {
        res.status(201).send('Not registered, role is not available');       
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(403).send('Invalid credentials');
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

// Protected route (accessible by users with 'user' or 'admin' roles)
app.get('/user', authenticateToken, authorizeRoles('user', 'admin'), (req, res) => {
    res.send('User content');
});

// Admin-only route
app.get('/admin', authenticateToken, authorizeRoles('admin'), (req, res) => {
    res.send('Admin content');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
