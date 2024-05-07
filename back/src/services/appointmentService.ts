import { IAppointment } from "../interfaces/IAppointment";
import { Status } from "../interfaces/IAppointment";
import { AppointmentDto } from "../dtos/AppointmentDto";
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

export const scheduleAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointment> => {
    try {
        const newAppointment: IAppointment = {
            id,
            date: appointmentData.date,
            time: appointmentData.time,
            status: Status.active,
            userId: 1
            // userId: await validateCredential({ username: appointmentData.username, password: appointmentData.password })
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