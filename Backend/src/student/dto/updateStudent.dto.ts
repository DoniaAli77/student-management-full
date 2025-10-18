import { IsArray, IsInt, IsOptional, IsString } from "class-validator";
import { course } from "src/courses/models/course.schema";

export class updateStudentDTo {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  age?: Number;
  @IsOptional()
  @IsArray()
  courses?: course[];
}