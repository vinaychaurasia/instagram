let userDB = require("../model/user.json"); 
let userModel = require("../model/userModel");
//user route handler
async function createUser(req, res){
    try{
        let ndbuser = await userModel.create(req.body);
        res.status(201).json({
            success: "successfull",
            user : ndbuser
        })
    }catch(err){
        res.status(500).json({
            success : "failure",
            "message" : err.message
        })
    }
    let user = req.body;
    // if a new entry is created on server
    // memory -> ram
    userDB.push(user);
    fs.writeFileSync(path.join(__dirname,"user.json"), JSON.stringify(userDB));
    //    res status code server sends
}

async function getUser (req, res) {
    try{
        let { user_id } = req.params;
        let user = await userModel.getById(user_id);
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
            "user" : user
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message : err.message,
            status : "failure"
        })
    }
    
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

module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
