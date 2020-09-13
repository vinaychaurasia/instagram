let userDB = require("../model/user.json"); 
let userModel = require("../model/userModel");
let userFollowerModel = require("../model/userFollowerModel");
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

async function updateUser(req, res) {
    let { user_id } = req.params;
    let updateObj = req.body;
    //all updated req recieved in toUpdate
    try{
        const response = await userModel.updateById(user_id, updateObj);
        const uUser = await userModel.getById(user_id);
        res.status(200).json({
            status : "success",
            "message ": uUser
        })
    }catch(err){
        res.status(500).json({
            status : "failure",
            err: err.message
        })
    }
}

async function deleteUser(req, res) {
    let { user_id } = req.params;
    try{
        const dUser = await userModel.getById(user_id);
        const response = await userModel.deleteById(dUser);
        res.status(200).json({
            status : "success",
            "message ": dUser
        })
    }catch(err){
        res.status(500).json({
            status : "failure",
            err: err.message
        })
    }
    

}

async function handleRequest(req, res){
    try{
        let reqObj = req.body;
        let {is_public} = await userModel.getById(reqObj.user_id);
        if(is_public == true){
            reqObj.is_pending = false;
            let mappingObj = await userFollowerModel.createRequest(reqObj);
            return res.status(201).json({
                status: "accepted",
                request : mappingObj,
                "message": "your request has been accepted"
            })
        }
        
        let mappingObj = await userFollowerModel.createRequest(reqObj);
        return res.status(201).json({
        status : "pending",
        request: mappingObj,
        "message" : "your request is pending"
    })
    }catch(err){
        res.status(500).json({
            success : "failure",
            "message" : err.message
        })
    }
}

async function acceptRequest(req, res){
    try{
        let {user_id, follower_id} = req.params;
        await userFollowerModel.acceptRequestQ(user_id, follower_id);
        let {handle} = await userModel.getById(follower_id);
            res.status(201).json({
                success: "successful",
                "message": `${handle} started following you`
            })
    }catch(err){
        res.status(500).json({
            success : "failure",
            "message" : err.message
        })
    }
}

async function rejectRequest(req, res){
    try{
        let {user_id, follower_id} = req.params;
        await userFollowerModel.rejectRequestQ(user_id, follower_id);
        let {handle} = await userModel.getById(follower_id);
            res.status(201).json({
                success: "successful",
                "message": `${handle} rejected you`
            })
    }catch(err){
        res.status(500).json({
            success : "failure",
            "message" : err.message
        })
    }
}

module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.handleRequest = handleRequest;
module.exports.acceptRequest = acceptRequest;
module.exports.rejectRequest = rejectRequest;

