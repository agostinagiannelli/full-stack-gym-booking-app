import { Request, Response } from "express";
import { getUsersService, getUserByIdService, registerUserService } from "../services/usersService";
import { validateCredential } from "../services/credentialsService";
import IUser from "../interfaces/IUser";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: IUser | undefined = await getUserByIdService(Number(id));
        if (user) res.status(200).json(user);
        else res.status(404).json({ message: "User not found" });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, dateOfBirth, identityNumber, username, password } = req.body;
        const newUser: IUser = await registerUserService({ name, email, dateOfBirth, identityNumber, username, password });
        res.status(201).json({ message: "User registered", newUser });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const credentials = req.body;
        const id = await validateCredential(credentials);
        res.status(200).json({ message: `User with id ${id} logged in` });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};