import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm'
import { Persons } from "../persons/persons.entity";

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Persons)
        private PersonRepository: Repository<Persons>,
    ) { }

    findAll(): Promise<Persons[]> {
        return this.PersonRepository.find();
    }

    findOne(personid: number): Promise<Persons | null> {
        return this.PersonRepository.findOneBy({ personid });
    }

    async remove(id: number): Promise<void> {
        await this.PersonRepository.delete(id);
    }
}