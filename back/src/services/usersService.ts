import UserDto from "../dtos/UserDto";
import IUser from "../interfaces/IUser";

let users: IUser[] = [];
let id: number = 1;

export const getUsersService = async (): Promise<IUser[]> => {
    return users;
};

export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    return users.find((user) => user.id === id);
};

export const registerUserService = async (userData: UserDto): Promise<IUser> => {
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        dateOfBirth: userData.dateOfBirth,
        identityNumber: userData.identityNumber,
        credentialsId: userData.credentialsId
    };
    users.push(newUser);
    id++;
    return newUser;
};

export const deleteUserService = async (id: number): Promise<IUser[]> => {
    users = users.filter((user: IUser) => user.id !== id);
    return users;
};