import { course } from "src/courses/models/course.schema";

export class createStudentDTo {
    email:string
    name: string;
    age: Number;
    courses: course[];
    password:string
  }