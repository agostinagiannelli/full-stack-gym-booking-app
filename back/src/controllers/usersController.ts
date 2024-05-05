import { Request, Response } from "express";
import { getUsersService, getUserByIdService, registerUserService, deleteUserService } from "../services/usersService";
import IUser from "../interfaces/IUser";

export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user: IUser | undefined = await getUserByIdService(Number(id));
    res.status(200).json(user);
};

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, dateOfBirth, identityNumber, credentialsId } = req.body;
    const newUser: IUser = await registerUserService({ name, email, dateOfBirth, identityNumber, credentialsId });
    res.status(201).json(newUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.body;
    await deleteUserService(id);
    res.status(200).json({ message: "User deleted" });
};