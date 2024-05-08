import { Request, Response } from "express";
import { getAppointmentsService, getAppointmentByIdService, scheduleAppointmentService, cancelAppointmentService } from "../services/appointmentService";
import { Appointment } from "../entities/Appointment";
import { AppointmentDto } from "../dtos/AppointmentDto";
import { IAppointment } from "../interfaces/IAppointment";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const { userId } = req.query;
        const appointments: Appointment[] = await getAppointmentsService(userId as string);
        if (appointments.length === 0) {
            res.status(404).json({ message: "No appointments found" });
            return;
        }
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const getAppointmentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment: Appointment | null = await getAppointmentByIdService(Number(id));
        if (appointment === null) {
            res.status(404).json({ message: "Appointment not found" });
            return;
        }
        res.status(200).json(appointment);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        const appointment: AppointmentDto = req.body;
        const newAppointment: Appointment = await scheduleAppointmentService(appointment);
        if (!newAppointment) {
            res.status(400).json({ message: "Appointment not scheduled" });
            return;
        }
        res.status(201).json({ message: "Appointment scheduled", newAppointment });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const appointment = await cancelAppointmentService(Number(id));
        if (!appointment) {
            res.status(404).json({ message: "Appointment not cancelled" });
            return;
        }
        res.status(200).json({ message: "Appointment cancelled", appointment });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};


//? Código antes de implementar TypeORM

// export const getAppointments = async (req: Request, res: Response) => {
//     try {
//         const appointments: IAppointment[] = await getAppointmentsService();
//         res.status(200).json(appointments);
//     } catch (error: any) {
//         res.status(404).json({ message: error.message });
//     }
// };

// export const getAppointmentById = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         const appointment: IAppointment | undefined = await getAppointmentByIdService(Number(id));
//         res.status(200).json(appointment);
//     } catch (error: any) {
//         res.status(404).json({ message: error.message });
//     }
// };

// export const scheduleAppointment = async (req: Request, res: Response) => {
//     try {
//         const appointment: AppointmentDto = req.body;
//         const newAppointment: IAppointment = await scheduleAppointmentService(appointment);
//         res.status(201).json({ message: "Appointment scheduled", newAppointment });
//     } catch (error: any) {
//         res.status(400).json({ message: error.message });
//     }
// };

// export const cancelAppointment = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;
//         await cancelAppointmentService(Number(id));
//         res.status(200).json({ message: `Appointment with id ${id} cancelled` });
//     } catch (error: any) {
//         res.status(404).json({ message: error.message });
//     }
// };