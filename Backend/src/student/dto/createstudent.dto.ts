import { course } from "src/courses/models/course.schema";

export class createStudentDTo {
    email:string
    name: string;
    age: Number;
    role:string
    courses: course[];
    password:string
  }