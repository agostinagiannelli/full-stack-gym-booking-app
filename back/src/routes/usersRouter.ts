import { Router } from "express";
import { getUsers, getUserById, registerUser, loginUser } from "../controllers/usersController";
import { validateUser } from "../middlewares/validateUser";

const usersRouter: Router = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", validateUser, registerUser);
usersRouter.post("/login", loginUser);

export default usersRouter;