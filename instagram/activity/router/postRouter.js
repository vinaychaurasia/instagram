 const express = require("express");
 postRouter = new express.Router();
const { } = require("../controller/postController");

//post router
postRouter.post("/", createPost)

postRouter.route("/:user_id").get(getPost).patch(updatePost).delete(deletePost);

module.exports = postRouter;