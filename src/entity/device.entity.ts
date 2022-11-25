import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Device {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deviceId: string;

    @Column()
    deviceType: string;

    @Column()
    deviceName: string;

    @Column()
    groupId: string;

    @Column({ nullable: true })
    temperature: number;

    @Column({ nullable: true })
    humidity: number;

    @Column({ nullable: true })
    occupancy: boolean;
}