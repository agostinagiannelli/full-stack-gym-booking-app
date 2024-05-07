import { CredentialDto } from "../dtos/CredentialDto";
import { ICredential } from "../interfaces/ICredential";

let credentials: ICredential[] = [];
let id: number = 1;

export const createCredential = async (credentialsData: CredentialDto): Promise<number> => {
    try {
        const newCredential: ICredential = {
            id,
            username: credentialsData.username,
            password: credentialsData.password
        };
        credentials.push(newCredential);
        id++;
        return newCredential.id;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const validateCredential = async (credentialsData: CredentialDto): Promise<number> => {
    try {
        const credential = credentials.find(
            (cred) => cred.username === credentialsData.username && cred.password === credentialsData.password
        );
        if (credential) return credential.id
        else throw new Error("User not found");
    } catch (error: any) {
        throw new Error(error.message);
    }
};