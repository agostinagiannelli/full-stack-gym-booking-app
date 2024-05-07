import { IAppointment } from "../interfaces/IAppointment";
import { Status } from "../interfaces/IAppointment";
import { AppointmentDto } from "../dtos/AppointmentDto";
import { findTrainingId } from "./trainingService";
import { validateCredential } from "./credentialsService";

let appointments: IAppointment[] = [];
let id: number = 1;

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    try {
        return appointments;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    try {
        return appointments.find((appointment) => appointment.id === id);
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const scheduleAppointmentService = async (appointment: AppointmentDto): Promise<IAppointment> => {
    try {
        const newAppointment: IAppointment = {
            id,
            date: appointment.date,
            time: appointment.time,
            status: Status.active,
            trainingId: findTrainingId(appointment.training),
            userId: await validateCredential({ username: appointment.username, password: appointment.password })
        };
        appointments.push(newAppointment);
        id++;
        return newAppointment;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
    try {
        const appointment = appointments.find((appointment) => appointment.id === id);
        if (appointment) appointment.status = Status.cancelled;
    } catch (error: any) {
        throw new Error(error.message);
    }
};