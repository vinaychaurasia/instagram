const express = require("express");
const userRouter = new express.Router();

let{createUser, getUser, updateUser, deleteUser, handleRequest, acceptRequest, rejectRequest} = require("../controller/userController");

//user router
userRouter.post("/", createUser);
userRouter.route("/followreq").post(handleRequest);
userRouter.route("/followreq/:user_id/:follower_id").patch(acceptRequest).delete(rejectRequest);
userRouter.route("/:user_id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;