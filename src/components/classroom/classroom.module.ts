import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomService } from '../classroom/classroom.service';
import { ClassroomController } from '../classroom/classroom.controller';
import { Classroom } from '../classroom/classroom.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Classroom])],
    providers: [ClassroomService],
    controllers: [ClassroomController],
})
export class ClassroomModule {}