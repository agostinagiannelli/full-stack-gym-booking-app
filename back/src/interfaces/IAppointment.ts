import { IUser } from "./IUser";
import { Status } from "../entities/Appointment";

export interface IAppointment {
    id: number;
    date: Date;
    time: string;
    status: Status;
    user: IUser['id'];
};