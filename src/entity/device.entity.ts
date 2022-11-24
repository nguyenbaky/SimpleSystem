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

    @Column()
    temperature: number;

    @Column()
    humidity: number;

    @Column({ default: true })
    occupancy: boolean;
}