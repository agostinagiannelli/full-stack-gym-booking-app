import { Request, Response } from "express";
import { getUsersService, getUserByIdService, registerUserService } from "../services/usersService";
import { validateCredential } from "../services/credentialsService";
import { IUser } from "../interfaces/IUser";
import { UserDto } from "../dtos/UserDto";
import { CredentialDto } from "../dtos/CredentialDto";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: IUser | undefined = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        const user: UserDto = req.body;
        const newUser: IUser = await registerUserService(user);
        res.status(201).json({ message: "User registered", newUser });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const credential: CredentialDto = req.body;
        const id = await validateCredential(credential);
        res.status(200).json({ message: `User with id ${id} logged in` });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};