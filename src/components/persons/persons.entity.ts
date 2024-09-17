import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persons {
    @PrimaryGeneratedColumn()
    personid: number;

    // @Column()
    // lastname: string;

    @Column()
    firstname: string;

    @Column()
    address: string;

    @Column()
    city: string;
}