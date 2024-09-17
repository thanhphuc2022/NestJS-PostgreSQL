import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { PersonService } from "./persons.service";
import { Persons } from "./persons.entity";

@Controller('person')
export class PersonController{
    constructor(private readonly classroomService: PersonService) { }

    @Get()
    async findAll(): Promise<Persons[]> {
        return this.classroomService.findAll();
    }

    //get user by id
    @Get(':id')
    async findOne(@Param('id') personid: number): Promise<Persons> {
        const person = await this.classroomService.findOne(personid);
        if (!person) {
            throw new NotFoundException('person does not exist!');
        } else {
            return person;
        }
    }
}
