import { Request, Response, NextFunction } from "express";
import { AppointmentDto } from "../dtos/AppointmentDto";

export const validateAppointment = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { date, time, userId }: AppointmentDto = req.body;
        if (!date) throw new Error("Missing field: date")
        if (!time) throw new Error("Missing field: time")
        if (!userId) throw new Error("Missing field: userId")
        next();
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};