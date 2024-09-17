import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonService } from '../persons/persons.service';
import { PersonController } from '../persons/persons.controller';
import { Persons } from "./persons.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Persons])],
    providers: [PersonService],
    controllers: [PersonController]
})
export class PersonModule {}