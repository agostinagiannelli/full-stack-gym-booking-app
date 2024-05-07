import { Request, Response } from "express";
import { IAppointment } from "../interfaces/IAppointment";
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from "../services/appointmentService";
import { AppointmentDto } from "../dtos/AppointmentDto";

let appointments: IAppointment[] = [];
let id: number = 1;

export const getAppointments = async (req: Request, res: Response) => {
    try {
        // const { userId } = req.query;
        const appointments: IAppointment[] = await getAppointmentsService();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment: IAppointment | undefined = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        const appointment: AppointmentDto = req.body;
        const newAppointment: IAppointment = await scheduleAppointmentService(appointment);
        res.status(201).json({ message: "Appointment scheduled", newAppointment });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await cancelAppointmentService(Number(id));
        res.status(200).json({ message: `Appointment with id ${id} cancelled` });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};