// Para cada uno de los endpoints, crearemos su correspondiente controlador, el cual por el momento únicamente deberá responder al cliente con un mensaje en texto que indica cuál será la funcionalidad a ejecutar en cada caso. 

import { Request, Response } from "express";
import IAppointment from "../interfaces/IAppointment";
import { cancelAppointmentService, getAppointmentByIdService, getAppointmentsService, scheduleAppointmentService } from "../services/appointmentService";


export const getAppointments = async (req: Request, res: Response) => {
    const users: IAppointment[] = await getAppointmentsService();
    res.status(200).json(users);
};

export const getAppointmentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user: IAppointment | undefined = await getAppointmentByIdService(Number(id));
    res.status(200).json(user);
};

export const scheduleAppointment = async (req: Request, res: Response) => {
    const { date, time, userId, status } = req.body;
    const newAppointment: IAppointment = await scheduleAppointmentService({ date, time, userId, status });
    res.status(201).json(newAppointment);
};

export const cancelAppointment = async (req: Request, res: Response) => {
    const { id } = req.body;
    await cancelAppointmentService(id);
    res.status(200).json({ message: "User deleted" });
};