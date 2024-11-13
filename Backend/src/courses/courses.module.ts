import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from 'src/courses/models/course.schema';

@Module({
  imports:[  MongooseModule.forFeature([{ name: 'course', schema: CourseSchema }])],
  providers: [CoursesService],
  controllers: [CoursesController]
})
export class CoursesModule {}
