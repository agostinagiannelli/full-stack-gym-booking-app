import { Router } from "express";
import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment } from "../controllers/appointmentsController";
import { validateAppointment } from "../middlewares/validateAppointment";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/user/:userId", getAppointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", validateAppointment, scheduleAppointment);
appointmentsRouter.put("/cancel/:id", cancelAppointment);

export default appointmentsRouter;