import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './models/student.schema';
import { AuthenticationMiddleware } from 'src/auth/middleware/authentication.middleware';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }])],
  controllers: [StudentController],
  providers: [StudentService],
  exports:[StudentService]
})

export class StudentModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(StudentController);
  }
}{}
