import { course } from "src/courses/models/course.schema";

export class createStudentDTo {
    id: string;
    name: string;
    age: Number;
    courses: course[];
  }