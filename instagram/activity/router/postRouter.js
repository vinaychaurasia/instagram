app.use("/api/post", postRouter);

//post router
postRouter.post("/", createPost)

postRouter.route("/:user_id").get(getPost).patch(updatePost).delete(deletePost);

module.exports = postRouter;