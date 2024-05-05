// GET /users => Obtener el listado de todos los usuarios.

// GET /users/:id => Obtener el detalle de un usuario específico.

// POST /users/register => Registro de un nuevo usuario.

// POST /users/login => Login del usuario a la aplicación.

import { Router } from "express";
import { getUsers, getUserById, registerUser } from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", registerUser);
// usersRouter.post("/login", loginUser);

export default usersRouter;