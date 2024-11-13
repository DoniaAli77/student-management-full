import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { student } from './models/student.schema';
import { createStudentDTo } from './dto/createstudent.dto';
import { updateStudentDTo } from './dto/updateStudent.dto';
import { promises } from 'dns';

@Controller('students') // it means anything starts with /student
export class StudentController {
    constructor(private studentService: StudentService) { }
    //The StudentService is injected through the class constructor. 
    //Notice the use of the private syntax. 
    //This shorthand allows us to both declare and initialize the studentService member immediately in the same location.
    @Get()
    // Get all students
    async getAllStudents(): Promise<student[]> {
        return await this.studentService.findAll();
    }
    @Get(':id')// /student/:id
    // Get a single student by ID
    async getStudentById(@Param('id') id: string):Promise<student> {// Get the student ID from the route parameters
        const student = await this.studentService.findById(id);
        return student;
    }
    // Create a new student
    @Post()
    async createStudent(@Body()studentData: createStudentDTo) {// Get the new student data from the request body
        const newStudent = await this.studentService.create(studentData);
        return newStudent;
    }
    // Update a student's details
    @Put(':id')
    async updateStudent(@Param('id') id:string,@Body()studentData: updateStudentDTo) {
        const updatedStudent = await this.studentService.update(id, studentData);
        return updatedStudent;       
    }
    // Delete a student by ID
    @Delete(':id')
    async deleteStudent(@Param('id')id:string) {
        const deletedStudent = await this.studentService.delete(id);
       return deletedStudent;
    }
}
