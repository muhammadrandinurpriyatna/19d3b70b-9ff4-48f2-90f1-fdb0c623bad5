import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) { }

  async addEmployees(employees: Partial<Employee>[]): Promise<Employee[]> {
    for (const employee of employees) {
      if (!employee.email || !employee.first_name || !employee.last_name || !employee.position || !employee.phone) {
        throw new BadRequestException('All fields are required and cannot be empty');
      }
      // Validate email format
      if (!this.isValidEmail(employee.email)) {
        throw new BadRequestException(`Email ${employee.email} is not valid`);
      }
      const existingEmployee = await this.employeeRepository.findOne({ where: { email: employee.email } });
      if (existingEmployee) {
        throw new BadRequestException(`Email ${employee.email} already exists`);
      }
    }
    return this.employeeRepository.save(employees);
  }

  async editEmployees(employees: Partial<Employee>[]): Promise<void> {
    for (const employee of employees) {
      if (!employee.email || !employee.first_name || !employee.last_name || !employee.position || !employee.phone) {
        throw new BadRequestException('All fields are required and cannot be empty');
      }
      // Validate email format
      if (!this.isValidEmail(employee.email)) {
        throw new BadRequestException(`Email ${employee.email} is not valid`);
      }
      const existingEmployee = await this.employeeRepository.findOne({ where: { email: employee.email } });
      if (existingEmployee && existingEmployee.id !== employee.id) {
        throw new BadRequestException(`Email ${employee.email} already exists`);
      }
      await this.employeeRepository.update(employee.id, employee);
    }
  }

  private isValidEmail(email: string): boolean {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  async deleteEmployees(ids: number[]): Promise<void> {
    await this.employeeRepository.delete(ids);
  }

  async findAll(
    page: number = 1,
    limit: number = 10,
    sort: string = 'id',
    order: 'ASC' | 'DESC' = 'ASC',
    filter: string = '',
  ) {
    const [employees, total] = await this.employeeRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
      order: { [sort]: order },
      where: [
        { first_name: Like(`%${filter}%`) },
        { last_name: Like(`%${filter}%`) },
        { position: Like(`%${filter}%`) },
        { phone: Like(`%${filter}%`) },
        { email: Like(`%${filter}%`) }
      ],
    });
    return {
      data: employees,
      count: total,
      page,
      limit,
    };
  }
}
