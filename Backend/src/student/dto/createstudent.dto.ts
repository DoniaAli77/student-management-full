import { IsArray, IsEmail, IsInt, IsOptional, IsString, Min } from "class-validator";
import { course } from "src/courses/models/course.schema";

export class createStudentDTo {
    @IsString()
    @IsEmail()
    email:string

    @IsString()
    name: string;

    @IsInt()
    @Min(18)
    age: Number;

    @IsString()
    role:string
    courses: course[];

    @IsString()
    password:string
  }