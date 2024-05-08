import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

export enum Status {
    active = 'active',
    cancelled = 'cancelled'
};

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

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
};