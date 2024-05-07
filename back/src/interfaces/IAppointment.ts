import { IUser } from "./IUser";

export enum Status {
    active = 'active',
    cancelled = 'cancelled'
};

export interface IAppointment {
    id: number;
    date: Date;
    time: string;
    status: Status;
    userId: IUser['id'];
};