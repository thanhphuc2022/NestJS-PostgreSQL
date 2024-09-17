import { Body, Controller, Delete, Get, HttpException, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { ClassroomService } from "./classroom.service";
import { Classroom } from "./classroom.entity";


@Controller('classroom')
export class ClassroomController {
    constructor(private readonly classroomService: ClassroomService) { }

    @Get()
    async findAll(): Promise<Classroom[]> {
        return this.classroomService.findAll();
    }

    //get user by id
    @Get(':id')
    async findOne(@Param('id') classid: number): Promise<Classroom> {
        const user = await this.classroomService.findOne(classid);
        if (!user) {
            throw new NotFoundException('User does not exist!');
        } else {
            return user;
        }
    }

    // @Post()
    // async create(@Body() classid: number, personid: number, classname: string): Promise<Classroom> {
    //     return this.classroomService.insert(classid, personid, classname)
    // }

    @Post()
    async create(@Body() classroom: Classroom): Promise<Classroom> {
        return this.classroomService.create(classroom);
    }

    //update user
    @Put(':id')
    async update(@Param('id') id: number, @Body() classroom: Classroom): Promise<any> {
        return this.classroomService.update(id, classroom);
    }

    // @Put(':id')
    // async update(@Param('id') id: number, @Body() classid: number, personid: number, classname: string): Promise<Classroom> {
    //     return this.classroomService.update(classid, personid, classname)
    // }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        const classroom = await this.classroomService.findOne(id);
        if (!classroom) {
            throw new NotFoundException('Khong tim thay id');
        } else {

            return this.classroomService.remove(id);
        }

    }
}