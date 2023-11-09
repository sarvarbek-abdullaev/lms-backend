import { Injectable } from '@nestjs/common';
import { Student } from './schemas/student.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: mongoose.Model<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find();
  }

  // async create(createStudentDto: any): Promise<Student> {}
}
