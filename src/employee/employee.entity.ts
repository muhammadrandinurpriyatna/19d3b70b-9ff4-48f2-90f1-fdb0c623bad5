import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsNotEmpty, IsEmail } from 'class-validator';

@Entity('employees')
@Unique(['email'])
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'First name should not be empty' })
  first_name: string;

  @Column()
  @IsNotEmpty({ message: 'Last name should not be empty' })
  last_name: string;

  @Column()
  @IsNotEmpty({ message: 'Position should not be empty' })
  position: string;

  @Column()
  @IsNotEmpty({ message: 'Phone should not be empty' })
  phone: string;

  @Column()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;
}
