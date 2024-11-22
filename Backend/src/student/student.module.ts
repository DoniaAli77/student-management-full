import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './models/student.schema';
import { AuthenticationMiddleware } from 'src/auth/middleware/authentication.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/guards/authentication.guard';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }])],
  controllers: [StudentController],
  providers: [StudentService],
  exports:[StudentService]
})

// @Module({
//   imports:[ MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }])],
//   controllers: [StudentController],
//   providers: [StudentService,{
//     provide: APP_GUARD, // to apply guard globally to all routes instead of specifying one by one
//     useClass: AuthGuard,
//   },],
//   exports:[StudentService]
// })




// export class StudentModule  implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(AuthenticationMiddleware)
//       .forRoutes(StudentController);
//   }
// }{}

export class StudentModule{}
