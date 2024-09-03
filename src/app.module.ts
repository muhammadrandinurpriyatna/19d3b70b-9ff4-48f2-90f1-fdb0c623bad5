import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee/employee.entity';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'employee_db',
      entities: [Employee],
      synchronize: false,
    }),
    EmployeeModule,
  ],
})
export class AppModule { }
