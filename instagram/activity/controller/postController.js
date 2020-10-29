let postDB = require("../model/post.json");
const postModel=require("../model/postModel");

//post route handler
async function createPost(req, res) {
    try {
        let nPost = await postModel.create(req.body);
        // db Save
        // console.log(user);
        // if a new entry is created on server
        // memory -> ram
        //    res status code server send 
        res.status(201).json({
            success: "successfull",
            post: nPost
        })
    } catch (err) {
        res.status(500).json({
            success: "failure",
            "message": err.message
        })
    }
}

function getPost(req, res) {
    let { post_id } = req.params;
    let post;
    for (let i = 0; i < postDB.length; i++) {
        if (postDB[i].post_id == post_id) {
            post = postDB[i];
        }
    }
    // no post or unknown post req
    if(post == undefined){
        return res.status(404).json({
            status : "failure",
            "message" : "post not found"
        })    
    }
    // authorised post
    return res.status(200).json({
        status: "success",
        "message" : "post found"
    })
}

function updatePost(req, res) {
    let { post_id } = req.params;
    let post;
    //all updated req recieved in toUpdate
    let toUpdate = req.body;
    for (let i = 0; i < postDB.length; i++) {
        if (postDB[i].post_id == post_id) {
            post = postDB[i];
        }
    }
    // unknown post
    if(post == undefined){
        return res.status(404).json({
            status : "failure",
            "message" : "post not found"
        })    
    }

    //add if not present else update
    for(let key in toUpdate){
        post[key] = toUpdate[key];
    }
    
    // write post in json file
    fs.writeFileSync(path.join(__dirname,"post.json"), JSON.stringify(postDB));

    return res.status(200).json({
        status: "success",
        "message" : "post updated"
    })
}

function deletePost(req, res) {
    let {post_id} = req.params;
    // intial length of DB
    let intiLength = postDB.length;
    postDB = postDB.filter(function(post){
        return post.post_id != post_id;
    })
    //if intial len == final length that means post not found
    if(intiLength == postDB.length){
        return res.status(404).json({
            status : "failure",
            "message" : "post not found"    
        })
    }
    // post found and deleted
    fs.writeFileSync(path.join(__dirname, "post.json"), JSON.stringify(postDB));
    return res.status(200).json({
        status : "succesfull",
        "message" : "post deleted"
    })

}


module.exports.createPost = createPost;
module.exports.getPost = getPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;