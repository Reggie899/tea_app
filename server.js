// 1
require("dotenv").config();

// 2
const express = require("express");

// 7
const jwt = require("jsonwebtoken");


//6 
const showUserData = require("./controllers/teaApp.controllers.js")


// 3
const app = express();

// 4
app.get(
  "/posts",
//    authoriseToken,
showUserData
//   (req, res ) => {
//     res.send(userData);}
    // posts.filter(post => post.username === req.user.name));
    //json makes everything json, even strings
  
);


// 5
const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {
  console.log(`I am PORT:${PORT} and I am alive 🧛🏻‍♀️🩸🦇`);
});
