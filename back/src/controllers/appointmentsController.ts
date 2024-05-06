import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from "../services/appointmentService";

export const getAppointments = async (req: Request, res: Response) => {
    // const users: IAppointment[] = await getAppointmentsService();
    // res.status(200).json(users);
    res.send("getAppointments");
};

export const getAppointmentById = async (req: Request, res: Response) => {
    // const { id } = req.params;
    // const user: IAppointment | undefined = await getAppointmentByIdService(Number(id));
    // res.status(200).json(user);
    res.send("getAppointmentById");
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    // const { date, time, status, userId } = req.body;
    // const newAppointment: IAppointment = await scheduleAppointmentService({ date, time, status, userId });
    // res.status(201).json(newAppointment);
    res.send("scheduleAppointment");
};

export const cancelAppointment = async (req: Request, res: Response) => {
    // const { id } = req.body;
    // await cancelAppointmentService(id);
    // res.status(200).json({ message: "User deleted" });
    res.send("cancelAppointment");
};