// npm init -y 
// npm i express
//  npm i nodemon --save-dev
// create start script int Package.json=>  "start":"nodemon crud/api.js"
// in pkg.json dir => npm start
const express = require("express");
const app = express();
let userDB = require("./user.json");
const fs = require("fs");
const path = require("path");
// REST API
// HTTP request => 
// http packet => body 
app.use(express.json());
// handler req.body 

const userRouter = new express.Router();
const postRouter = new express.Router();

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);


//user router
userRouter.post("/", createUser)

userRouter.route("/:user_id").get(getUser).patch(updateUser).delete(deleteUser);

//post router
postRouter.post("/", createPost)

postRouter.route("/:user_id").get(getPost).patch(updatePost).delete(deletePost);


//user route handler
function createUser(req, res){
    let user = req.body;
    // if a new entry is created on server
    // memory -> ram
    userDB.push(user);
    fs.writeFileSync(path.join(__dirname,"user.json"), JSON.stringify(userDB));
    //    res status code server sends
    return res.status(201).json({
        success: "successfull",
        user: user
    })
}

function getUser (req, res) {
    let { user_id } = req.params;
    let user;
    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].user_id == user_id) {
            user = userDB[i];
        }
    }
    // no user or unknown user req
    if(user == undefined){
        return res.status(404).json({
            status : "failure",
            "message" : "user not found"
        })    
    }
    // authorised user
    return res.status(200).json({
        status: "success",
        "message" : "user found"
    })
}

function updateUser(req, res) {
    let { user_id } = req.params;
    let user;
    //all updated req recieved in toUpdate
    let toUpdate = req.body;
    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].user_id == user_id) {
            user = userDB[i];
        }
    }
    // unknown user
    if(user == undefined){
        return res.status(404).json({
            status : "failure",
            "message" : "user not found"
        })    
    }

    //add if not present else update
    for(let key in toUpdate){
        user[key] = toUpdate[key];
    }
    
    // write user in json file
    fs.writeFileSync(path.join(__dirname,"user.json"), JSON.stringify(userDB));

    return res.status(200).json({
        status: "success",
        "message" : "user updated"
    })
}

function deleteUser(req, res) {
    let {user_id} = req.params;
    // intial length of DB
    let intiLength = userDB.length;
    userDB = userDB.filter(function(user){
        return user.user_id != user_id;
    })
    //if intial len == final length that means user not found
    if(intiLength == userDB.length){
        return res.status(404).json({
            status : "failure",
            "message" : "user not found"    
        })
    }
    // user found and deleted
    fs.writeFileSync(path.join(__dirname, "user.json"), JSON.stringify(userDB));
    return res.status(200).json({
        status : "succesfull",
        "message" : "user deleted"
    })

}

//post route handler
function createPost(req, res){
    let user = req.body;
    // if a new entry is created on server
    // memory -> ram
    userDB.push(user);
    fs.writeFileSync(path.join(__dirname,"user.json"), JSON.stringify(userDB));
    //    res status code server sends
    return res.status(201).json({
        success: "successfull",
        user: user
    })
}

function getPost(req, res) {
    let { user_id } = req.params;
    let user;
    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].user_id == user_id) {
            user = userDB[i];
        }
    }
    // no user or unknown user req
    if(user == undefined){
        return res.status(404).json({
            status : "failure",
            "message" : "user not found"
        })    
    }
    // authorised user
    return res.status(200).json({
        status: "success",
        "message" : "user found"
    })
}

function updatePost(req, res) {
    let { user_id } = req.params;
    let user;
    //all updated req recieved in toUpdate
    let toUpdate = req.body;
    for (let i = 0; i < userDB.length; i++) {
        if (userDB[i].user_id == user_id) {
            user = userDB[i];
        }
    }
    // unknown user
    if(user == undefined){
        return res.status(404).json({
            status : "failure",
            "message" : "user not found"
        })    
    }

    //add if not present else update
    for(let key in toUpdate){
        user[key] = toUpdate[key];
    }
    
    // write user in json file
    fs.writeFileSync(path.join(__dirname,"user.json"), JSON.stringify(userDB));

    return res.status(200).json({
        status: "success",
        "message" : "user updated"
    })
}

function deletePost(req, res) {
    let {user_id} = req.params;
    // intial length of DB
    let intiLength = userDB.length;
    userDB = userDB.filter(function(user){
        return user.user_id != user_id;
    })
    //if intial len == final length that means user not found
    if(intiLength == userDB.length){
        return res.status(404).json({
            status : "failure",
            "message" : "user not found"    
        })
    }
    // user found and deleted
    fs.writeFileSync(path.join(__dirname, "user.json"), JSON.stringify(userDB));
    return res.status(200).json({
        status : "succesfull",
        "message" : "user deleted"
    })

}

// localhost:3000/api/users
app.listen(3000, function () {
    console.log("Server is listening at port 3000");
})