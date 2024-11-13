
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { course} from '../../courses/models/course.schema';

@Schema()
export class student {
  
  @Prop({ required: true,default:'hi' })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: Number;

  @Prop({ type: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'course' }] })
  courses: course[];
}

export const StudentSchema = SchemaFactory.createForClass(student);






//=============================================
//import * as mongoose from 'mongoose';
// const schemaOptions = {
//   strict: false,
//   timestamps: true,
// };
// export interface Student {
//     id: string;
//     name: string;
//     age: number;
//     courses: Object ;
// }
  

// export const studentSchema = new mongoose.Schema(
//     {
//         id:{
//             type:String,
//         },
//       name: {
//         type: String,
//         minLength: 3,
//         maxLength: 30,
//       },
//       age: {
//         type: Number,
//         min: 18,
//         required: true,
//       },
//       courses:[courseSchema]
//     },
//     // schemaOptions
//     {
//       strict: false,
//       timestamps: true,
//     }
//   );
  
// export type StudentDocument = Student & Document;
 
// module.exports = mongoose.model('StudentModel', studentSchema);
