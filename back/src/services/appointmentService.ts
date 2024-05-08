import { appointmentRepository, userRepository } from "../config/data-source";
import { Appointment, Status } from "../entities/Appointment";
import { AppointmentDto } from "../dtos/AppointmentDto";

export const getAppointmentsService = async (userId: string): Promise<Appointment[]> => {
    try {
        const appointments: Appointment[] = await appointmentRepository.find({
            where: userId ? { user: { id: Number(userId) } } : {},
            relations: ["user"]
        });
        if (appointments.length === 0) throw new Error("No appointments found");
        return appointments;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    try {
        const appointment = await appointmentRepository.findOne({
            where: { id },
            relations: ["user"]
        });
        if (appointment === null) throw new Error("Appointment not found");
        return appointment;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const scheduleAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    try {
        const user = await userRepository.findOne({
            where: { id: appointmentData.userId },
        });
        if (!user) throw new Error("User for appointment not found");
        const newAppointment = await appointmentRepository.create({
            date: appointmentData.date,
            time: appointmentData.time,
            user
        });
        await appointmentRepository.save(newAppointment);
        if (!newAppointment) throw new Error("Appointment not scheduled");
        return newAppointment;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const cancelAppointmentService = async (id: number): Promise<Appointment> => {
    try {
        const appointment = await appointmentRepository.findOne({
            where: { id },
            relations: ["user"]
        });
        if (!appointment) throw new Error("Appointment not found");
        const cancelledAppointment = await appointmentRepository.create({
            ...appointment,
            status: Status.cancelled
        });
        await appointmentRepository.save(cancelledAppointment);
        if (!cancelledAppointment) throw new Error("Appointment not cancelled");
        return cancelledAppointment;
    } catch (error: any) {
        throw new Error(error.message);
    }
};


//? Código antes de implementar TypeORM

// let appointments: IAppointment[] = [];
// let id: number = 1;

// export const getAppointmentsService = async (): Promise<IAppointment[]> => {
//     try {
//         return appointments;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
//     try {
//         return appointments.find((appointment) => appointment.id === id);
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const scheduleAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointment> => {
//     try {
//         const newAppointment: IAppointment = {
//             id,
//             date: appointmentData.date,
//             time: appointmentData.time,
//             status: Status.active,
//             userId: await validateCredential({ username: appointmentData.username, password: appointmentData.password })
//         };
//         appointments.push(newAppointment);
//         id++;
//         return newAppointment;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };

// export const cancelAppointmentService = async (id: number): Promise<void> => {
//     try {
//         const appointment = appointments.find((appointment) => appointment.id === id);
//         if (appointment) appointment.status = Status.cancelled;
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// };