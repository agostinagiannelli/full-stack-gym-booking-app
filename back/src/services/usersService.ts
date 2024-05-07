import { createCredential, validateCredential } from "./credentialsService";
import { IUser } from "../interfaces/IUser";
import { UserDto } from "../dtos/UserDto";
import { CredentialDto } from "../dtos/CredentialDto";

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

export const loginUserService = async (credentialsData: CredentialDto): Promise<number | string> => {
    try {
        return await validateCredential(credentialsData);
    } catch (error: any) {
        throw new Error(error.message);
    }
};