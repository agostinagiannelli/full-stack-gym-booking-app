import { Request, Response } from "express";
import { getAppointmentsService, getAppointmentByIdService, scheduleAppointmentService, cancelAppointmentService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";
import { AppointmentDto } from "../dtos/AppointmentDto";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const appointments: Appointment[] = await getAppointmentsService(userId as string);
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment: Appointment | null = await getAppointmentByIdService(Number(id));
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        const appointment: AppointmentDto = req.body;
        const newAppointment: Appointment = await scheduleAppointmentService(appointment);
        res.status(201).json({ message: "Appointment scheduled", newAppointment });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await cancelAppointmentService(Number(id));
        res.status(200).json({ message: "Appointment cancelled", appointment });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};