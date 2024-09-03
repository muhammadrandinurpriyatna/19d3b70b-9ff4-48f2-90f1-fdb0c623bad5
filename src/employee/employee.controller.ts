import { Controller, Get, Post, Put, Delete, Body, Query, BadRequestException } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto, UpdateEmployeeDto, DeleteEmployeeDto } from './employee.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Get()
  @ApiOperation({ summary: 'Get all employees with pagination, sorting, and filtering' })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiQuery({ name: 'sort', required: false, example: 'id' })
  @ApiQuery({ name: 'order', required: false, example: 'ASC' })
  @ApiQuery({ name: 'filter', required: false, example: 'John' })
  @ApiResponse({ status: 200, description: 'List of employees' })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sort') sort: string = 'id',
    @Query('order') order: 'ASC' | 'DESC' = 'ASC',
    @Query('filter') filter: string = '',
  ) {
    return this.employeeService.findAll(page, limit, sort, order, filter);
  }

  @Post('/add')
  @ApiOperation({ summary: 'Add multiple employees' })
  @ApiResponse({ status: 201, description: 'Employees added successfully', type: [CreateEmployeeDto] })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async addEmployees(@Body() employees: CreateEmployeeDto[]) {
    try {
      return await this.employeeService.addEmployees(employees);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put('/edit')
  @ApiOperation({ summary: 'Edit multiple employees' })
  @ApiResponse({ status: 200, description: 'Employees updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async editEmployees(@Body() employees: UpdateEmployeeDto[]) {
    try {
      await this.employeeService.editEmployees(employees);
      return { message: 'Employees updated successfully' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete('/delete')
  @ApiOperation({ summary: 'Delete multiple employees' })
  @ApiResponse({ status: 200, description: 'Employees deleted successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async deleteEmployees(@Body() dto: DeleteEmployeeDto) {
    await this.employeeService.deleteEmployees(dto.ids);
    return { message: 'Employees deleted successfully' };
  }
}
