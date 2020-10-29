const express = require("express");
const postRouter = new express.Router();

const { createPost } = require("../controller/postController");

//post router
postRouter.route("/").post(createPost);

postRouter.route("/:user_id").get(getPost).patch(updatePost).delete(deletePost);

module.exports = postRouter;