import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'credentials' })

export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, type: 'varchar', length: 50 })
    username: string;

    @Column({ type: 'text', select: false})
    password: string;
};