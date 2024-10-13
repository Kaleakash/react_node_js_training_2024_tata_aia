const express = require('express');
const passport = require('passport');
const session = require('express-session');
const GitHubStrategy = require('passport-github2').Strategy;
const axios = require("axios");

const app = express();

// Configure session middleware
app.use(session({
  secret: 'your_secret_key', // Use a strong secret key in production
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());



// Configure GitHub strategy
passport.use(new GitHubStrategy({
    clientID:"",
    clientSecret:"",
    callbackURL:"http://localhost:9090/auth/github/callback"
},(accessToken,refreshToken,profile,done)=> {
    console.log("Access Token "+accessToken)
    console.log(profile)
    done(null,profile)
}));

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes

// Home route
app.get('/', (req, res) => {
  res.send(`<h1>Home</h1><a href="/auth/github">Login with GitHub</a>`);
});

// GitHub authentication route
app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub callback route
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/' }), (req, res) => {
  // Successful authentication, redirect to dashboard.
  res.redirect('/dashboard');
});

// Dashboard route (protected)
// app.get('/dashboard', ensureAuthenticated, (req, res) => {
//   res.send(`<h1>Dashboard</h1><p>Welcome, ${req.user.username}!
//     </p><a href="/logout">Logout</a>`);
// });


app.get('/dashboard', ensureAuthenticated, async (req, res) => {
    const profile = req.user;
    //const accessToken = req.user.accessToken;
    //console.log(profile.accessToken)
               // axios.post("http://abcapp",profile);
    try{
      // Render the dashboard page with user info
      res.send(`
        <h1>Dashboard</h1>
        <p>Welcome, ${profile.username || profile.displayName}</p>
        <p><img src="${profile.photos[0].value}" alt="Profile Image"></p>
        <p>Number of repositories: ${profile._json.public_repos}</p>
        <p><a href="/logout">Logout</a></p>
      `);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      res.send('Error fetching repositories');
    }
  });
  
  
  

// Logout route
app.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Middleware to ensure user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

// Start the server
app.listen(9090, () => {
  console.log('Server started on http://localhost:9090');
});
