import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { course } from './models/course.schema';
import { createCourseDTo } from './dto/createstudent.dto';
import { updateCourseDTo } from './dto/updateStudent.dto';

@Controller('courses')
export class CoursesController {
    constructor(private courseService: CoursesService) { }
    //The courseService is injected through the class constructor. 
    //Notice the use of the private syntax. 
    //This shorthand allows us to both declare and initialize 
    //the courseService member immediately in the same location.
    @Get()
    // Get all course
    async getAllcourses(): Promise<course[]> {
        return await this.courseService.findAll();
    }
    @Get(':id')// /courses/:id   // Get a single course by ID
    async getCourseById(@Param('id') id: string) {// Get the student ID from the route parameters
        const course = await this.courseService.findById(id);
        return course;
    }
    // Create a new course
    @Post()
    async createCourse(@Body()courseData: createCourseDTo) {// Get the new student data from the request body
        const newCourse = await this.courseService.create(courseData);
        return newCourse;
    }
    // Update a course's details
    @Put(':id')
    async updateStudent(@Param('id') id:string,@Body()courseData: updateCourseDTo) {
        const updatedCourse = await this.courseService.update(id, courseData);
        return updatedCourse;      
    }
    // Delete a course by ID
    @Delete(':id')
    async deleteStudent(@Param('id')id:string) {
        const deletedCourse = await this.courseService.delete(id);
       return deletedCourse;
    }

}
