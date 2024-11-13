import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { student, } from 'src/student/models/student.schema';
import { updateStudentDTo } from './dto/updateStudent.dto';

@Injectable()
export class StudentService {

    constructor(
        @InjectModel(student.name) private studentModel: mongoose.Model<student>
    ) { }

    async create(studentData: student): Promise<student> {
        const newStudent = new this.studentModel(studentData);  // Create a new student document
        return await newStudent.save();  // Save it to the database
    }

    // Get all students
    async findAll(): Promise<student[]> {
        let students= await this.studentModel.find();  // Fetch all students from the database
        return students
    }

    // Get a student by ID
    async findById(id: string): Promise<student> {
        return await this.studentModel.findById(id);  // Fetch a student by ID
    }

    // Update a student's details by ID
    async update(id: string, updateData: updateStudentDTo): Promise<student> {
        return await this.studentModel.findByIdAndUpdate(id, updateData, { new: true });  // Find and update the student
    }

    // Delete a student by ID
    async delete(id: string): Promise<student> {
        return await this.studentModel.findByIdAndDelete(id);  // Find and delete the student
    }
}
