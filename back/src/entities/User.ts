import { Column, Entity, JoinColumn, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Credential } from "./Credential";

@Entity({ name: 'user' })

export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 200 })
    name: string;

    @Column({ unique: true, type: 'varchar', length: 200 })
    email: string;

    @Column({ type: 'date' })
    dateOfBirth: Date;

    @Column({ unique: true, type: 'int'})
    identityNumber: number;

    @OneToOne(() => Credential)
    @JoinColumn({ name: "credentialsId" })
    credentials: Credential;
};