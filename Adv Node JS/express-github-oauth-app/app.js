const express = require("express");
const passport = require("passport")
const session = require("express-session")
const GitHubStrategy = require("passport-github2").Strategy;

let app = express();

// configure middleware session 
app.use(session({
    secret:"my_key",
    resave:false,
    saveUninitialized:false
}));

// initialize passport 
app.use(passport.initialize())
app.use(passport.session());


// configure github 
let strategy = new GitHubStrategy({
    clientID:"",
    clientSecret:"",
    callbackURL:"http://localhost:9090/auth/github/callback"
},(accessToken,refreshToken,profile,done)=> {
    console.log("Access Token "+accessToken)
    console.log(profile)
    done(null,profile)
})

passport.use(strategy);

// Serialization  
passport.serializeUser((user,done)=> {
    done(null,user);
})
// Deserialization
passport.deserializeUser((user,done)=> {
    done(null,user);
})

app.get("/",(req,res)=> {
    res.send(`<h1>Home Page<a href="/auth/github">Login To GitHub Account</> </h1>`)
})

app.get("/auth/github",passport.authenticate('github',{scope:['user.email']}))

app.get("/auth/github/callback",passport.authenticate('github',{failureRedirect:"/"}),(req,res)=> {
    res.redirect("/dashboard")
})
let ensureAuthenticate= (req,res,next)=> {
    if(req.isAuthenticated()){
        return next();
    }else {
        res.redirect("/")
    }
}

app.get("/dashboard",ensureAuthenticate,async(req,res)=> {
    
    try{
        let profile = req.user;
        console.log(profile)
        res.send(profile.username)
    }catch(error){
        res.json({"msg":error.message})
    }
})






app.listen(9090,()=>console.log("Server running on port number 9090"));
