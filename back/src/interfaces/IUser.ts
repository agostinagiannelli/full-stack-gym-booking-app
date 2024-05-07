import { ICredential } from "./ICredential";
import { IAppointment } from "./IAppointment";

export interface IUser {
    id: number;
    name: string;
    email: string;
    dateOfBirth: Date;
    identityNumber: number;
    credentialsId: ICredential['id'];
    appointments: IAppointment[];
};