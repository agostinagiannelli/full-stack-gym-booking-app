import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({ name: 'users' })

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ unique: true, type: 'varchar', length: 100 })
    email: string;

    @Column({ type: 'date', default: new Date() })
    dateOfBirth: Date;

    @Column({ unique: true, type: 'int' })
    identityNumber: number;

    @OneToOne(() => Credential)
    @JoinColumn({ name: 'credentialsId' })
    credentials: Credential | number;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
};