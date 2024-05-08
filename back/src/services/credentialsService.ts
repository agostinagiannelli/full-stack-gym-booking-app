import { CredentialDto } from "../dtos/CredentialDto";
import { credentialRepository } from "../config/data-source";
import { ICredential } from "../interfaces/ICredential";

export const createCredential = async (credentialsData: CredentialDto): Promise<number> => {
    try {
        const newCredential = await credentialRepository.create(credentialsData);
        await credentialRepository.save(newCredential);
        return newCredential.id;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const validateCredential = async (credentialsData: CredentialDto): Promise<number | undefined> => {
    try {
        const credential = await credentialRepository.findOne({
            where: { username: credentialsData.username, password: credentialsData.password },
            select: ["id"]
        });
        if (credential) return credential.id
        else throw new Error("User not found or invalid credentials");
    } catch (error: any) {
        throw new Error(error.message);
    }
};


//? Código antes de implementar TypeORM

// let credentials: ICredential[] = [];
// let id: number = 1;

// export const createCredential = async (credentialsData: CredentialDto): Promise<number> => {
//     try {
//         const newCredential: ICredential = {
//             id,
//             username: credentialsData.username,
//             password: credentialsData.password
//         };
//         credentials.push(newCredential);
//         id++;
//         return newCredential.id;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const validateCredential = async (credentialsData: CredentialDto): Promise<number> => {
//     try {
//         const credential = credentials.find(
//             (cred) => cred.username === credentialsData.username && cred.password === credentialsData.password
//         );
//         if (credential) return credential.id
//         else throw new Error("User not found");
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };