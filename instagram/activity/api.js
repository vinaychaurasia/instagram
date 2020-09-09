// npm init -y 
// npm i express
//  npm i nodemon --save-dev
// create start script int Package.json=>  "start":"nodemon crud/api.js"
// in pkg.json dir => npm start
const express = require("express");
const app = express();
// let userDB = require("./user.json");
const fs = require("fs");
const path = require("path");
let {createUser, getUser, updateUser, deleteUser} = require("./controller/userController");
// let {createPost, getPost, updatePost, deletePost} = require("./controller/postController");

const userRouter = require("./router/userRouter");
// const postRouter = require("./router/postRouter");

// to send static resources to client
app.use(express.static("view"));

// REST API
// HTTP request => 
// http packet => body 
app.use(express.json());
// handler req.body 

app.use("/api/v1/users", userRouter);
// app.use("/api/post", postRouter);

// localhost:3000/api/users
app.listen(3000, function () {
    console.log("Server is listening at port 3000");
})