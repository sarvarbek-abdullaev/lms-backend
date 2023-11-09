import { Student } from './schemas/student.schema';
import { StudentService } from './student.service';
import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async getBooks(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
