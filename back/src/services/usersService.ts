import { createCredential, validateCredential } from "./credentialsService";
import { userRepository } from "../config/data-source";
import { User } from "../entities/User";
import { UserDto } from "../dtos/UserDto";
import { CredentialDto } from "../dtos/CredentialDto";

export const getUsersService = async (): Promise<User[]> => {
    try {
        const users = await userRepository.find({
            relations: ["credentials", "appointments"]
        });
        if (users.length === 0) throw new Error("No users found");
        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
    try {
        const user = await userRepository.findOne({
            where: { id },
            relations: ["credentials", "appointments"]
        });
        if (user === null) throw new Error("User not found");
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const registerUserService = async (userData: UserDto): Promise<User> => {
    try {
        const credentials = await createCredential({ username: userData.username, password: userData.password });
        const newUser = await userRepository.create({
            name: userData.name,
            email: userData.email,
            dateOfBirth: userData.dateOfBirth,
            identityNumber: userData.identityNumber,
            credentials
        });
        await userRepository.save(newUser);
        if (!newUser) throw new Error("User not registered");
        return newUser;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const loginUserService = async (credentialsData: CredentialDto): Promise<User> => {
    try {
        const userId = await validateCredential(credentialsData);
        const user = await userRepository.findOne({
            where: { id: userId },
            relations: ["credentials", "appointments"]
        });
        if (user === null) throw new Error("User not found");
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
};


//? Código antes de implementar TypeORM

// let users: IUser[] = [];
// let id: number = 1;

// export const getUsersService = async (): Promise<IUser[]> => {
//     try {
//         return users;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
//     try {
//         return users.find((user) => user.id === id);
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const registerUserService = async (userData: UserDto): Promise<IUser> => {
//     try {
//         const newUser: IUser = {
//             id,
//             name: userData.name,
//             email: userData.email,
//             dateOfBirth: userData.dateOfBirth,
//             identityNumber: userData.identityNumber,
//             credentialsId: await createCredential({ username: userData.username, password: userData.password }),
//             appointments: []
//         };
//         users.push(newUser);
//         id++;
//         return newUser;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const loginUserService = async (credentialsData: CredentialDto): Promise<number | string> => {
//     try {
//         return await validateCredential(credentialsData);
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };