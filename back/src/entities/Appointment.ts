import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Status } from "../interfaces/IAppointment";
import { User } from "./User";

@Entity({ name: 'appointments' })

export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'time' })
    time: string;

    @Column({ type: 'enum', enum: Status, default: Status.active })
    status: Status;

    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "userId" })
    user: User;
};