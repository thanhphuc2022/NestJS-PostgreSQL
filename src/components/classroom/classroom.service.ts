import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classroom } from '../classroom/classroom.entity';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(Classroom)
    private ClassroomsRepository: Repository<Classroom>,
  ) { }

  findAll(): Promise<Classroom[]> {
    return this.ClassroomsRepository.find();
  }

  findOne(classid: number): Promise<Classroom | null> {
    return this.ClassroomsRepository.findOneBy({ classid });
  }

  //Insert cách 1
  // async insert(classid: string, personid: number, classname: string): Promise<Classroom | null> {
  //   await this.ClassroomsRepository.insert({ classid, personid, classname });
  //   return await this.ClassroomsRepository.findOne({ where: { classid, personid, classname } });
  // }
  //Insert cách 2 sử dụng Partial
  async create(classroom: Partial<Classroom>): Promise<Classroom> {
    const newclassroom = this.ClassroomsRepository.create(classroom);
    return this.ClassroomsRepository.save(newclassroom);
  }

  // async insert(classid: number, personid: number, classname: string): Promise<Classroom | null> {
  //   const classroom = this.ClassroomsRepository.create({ classid, personid, classname });
  //   return await this.ClassroomsRepository.save(classroom);
  // }

  // async update(classid: number, personid: number, classname: string): Promise<Classroom> {
  //   await this.ClassroomsRepository.update({ classid, personid }, { classname });
  //   return this.ClassroomsRepository.findOne({ where: { classid } });
  // }
  
//Update cách 2 sử dụng Partial
  async update(classid: number, classroom: Partial<Classroom>): Promise<Classroom> {
    await this.ClassroomsRepository.update(classid, classroom);
    return this.ClassroomsRepository.findOne({ where: { classid } });
  }


  // let classroom=this.ClassroomsRepository.findOne({where:{classid}});
  // if(!classroom){
  //   return null;
  // }


  async remove(classid: number): Promise<void> {
    await this.ClassroomsRepository.delete(classid);
  }
}