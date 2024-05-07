import { IUser } from "./IUser";
import { ITraining } from "./ITraining";

export enum Status {
    active = 'active',
    cancelled = 'cancelled'
};

export interface IAppointment {
    id: number,
    date: Date,
    time: string,
    status: Status,
    trainingId: ITraining['id'];
    userId: IUser['id'],
};