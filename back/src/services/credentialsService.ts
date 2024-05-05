import CredentialDto from "../dtos/CredentialDto";
import ICredential from "../interfaces/ICredential";

let credentials: ICredential[] = [];
let id: number = 1;

export const createCredentials = async (credentialsData: CredentialDto): Promise<number> => {
    const newCredentials: ICredential = {
        id,
        username: credentialsData.username,
        password: credentialsData.password
    };
    credentials.push(newCredentials);
    id++;
    return id;
};

export const validateCredentials = async (credentialsData: CredentialDto): Promise<number | null> => {
    const credential = credentials.find(
        (cred) => cred.username === credentialsData.username && cred.password === credentialsData.password
    );
    return credential ? credential.id : null;
};