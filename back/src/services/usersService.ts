import { IUser } from "../interfaces/IUser";
import { ICredential } from "../interfaces/ICredential";
import { createCredential, validateCredential } from "./credentialsService";
import { UserDto } from "../dtos/UserDto";

let users: IUser[] = [];
let id: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
    try {
        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    try {
        return users.find((user) => user.id === id);
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const registerUserService = async (userData: UserDto): Promise<IUser> => {
    try {
        const newUser: IUser = {
            id,
            name: userData.name,
            email: userData.email,
            dateOfBirth: userData.dateOfBirth,
            identityNumber: userData.identityNumber,
            credentialsId: await createCredential({ username: userData.username, password: userData.password }),
            appointments: []
        };
        users.push(newUser);
        id++;
        return newUser;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const loginUserService = async (credentials: ICredential): Promise<number | string> => {
    try {
        return await validateCredential(credentials);
    } catch (error: any) {
        throw new Error(error.message);
    }
};