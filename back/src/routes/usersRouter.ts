import { Router } from "express";
import { getUsers, getUserById, registerUser, loginUser } from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;