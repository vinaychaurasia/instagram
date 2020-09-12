const express = require("express");
const userRouter = new express.Router();

let{createUser, getUser, updateUser, deleteUser, handleRequest} = require("../controller/userController");

//user router
userRouter.post("/", createUser);
userRouter.route("/followreq").post(handleRequest);
userRouter.route("/:user_id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;