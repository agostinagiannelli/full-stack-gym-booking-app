import { Request, Response } from "express";
import { getUsersService, getUserByIdService, registerUserService, loginUserService } from "../services/usersService";
import { User } from "../entities/User";
import { UserDto } from "../dtos/UserDto";
import { CredentialDto } from "../dtos/CredentialDto";
import { IUser } from "../interfaces/IUser";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService();
        if (users.length === 0) {
            res.status(404).json({ message: "Users not found" });
            return;
        }
        res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: User | null = await getUserByIdService(Number(id));
        if (user === null) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        const user: UserDto = req.body;
        const newUser: User = await registerUserService(user);
        res.status(201).json({ message: "User registered", newUser });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const credential: CredentialDto = req.body;
        const userId = await loginUserService(credential);
        if (userId === undefined) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        res.status(200).json({ message: `User with id ${userId} logged in` });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};