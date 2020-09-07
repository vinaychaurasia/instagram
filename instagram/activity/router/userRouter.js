app.use("/api/user", userRouter);

//user router
userRouter.post("/", createUser)

userRouter.route("/:user_id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;