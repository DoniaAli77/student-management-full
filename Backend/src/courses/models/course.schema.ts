import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class course {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;
 
}
export const CourseSchema = SchemaFactory.createForClass(course);


//=======================================
//import * as mongoose from 'mongoose';
//const schemaOptions = {
    //   strict: false,
    //   timestamps: true,
    // };
    // export const courseSchema= new mongoose.Schema(
    
    //  {
    //     name: {
    //       type: String,
    //       minLength: 3,
    //       maxLength: 30,
    //     },
    //     id: {
    //       type: Number,
    //       min: 1,
    //       required: true,
    //     },
    //   },
    // );
    
    // module.exports = mongoose.model('CourseModel', courseSchema);
    