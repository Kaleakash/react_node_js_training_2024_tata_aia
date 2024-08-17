const express = require('express');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const cors = require("cors");
const app = express();

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers)
}));

app.use(csurf({ cookie: true })); // CSRF protection

// Route to get CSRF token
app.get('/api/csrf-token', (req, res) => {
  let csrTokenValue = req.csrfToken();
  console.log("Token generate "+csrTokenValue)
  res.json({ csrfToken: csrTokenValue });
});

// Example protected route
app.post('/api/submit-form', (req, res) => {
  // Handle the form submission
  console.log(req.body)
  res.json({ message: 'Form submission successful!' });
});

// Error handling for CSRF errors
app.use((err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(403).send('CSRF token validation failed');
  } else {
    next(err);
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));
