import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Classroom {
    @PrimaryGeneratedColumn()
    classid: number;

    @Column()
    personid: number;

    @Column()
    classname: string;
}