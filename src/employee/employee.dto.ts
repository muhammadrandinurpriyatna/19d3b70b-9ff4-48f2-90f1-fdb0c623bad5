import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateEmployeeDto {
    @ApiProperty({ example: 'John', description: 'The first name of the employee' })
    @IsNotEmpty()
    first_name: string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the employee' })
    @IsNotEmpty()
    last_name: string;

    @ApiProperty({ example: 'Software Engineer', description: 'The position of the employee' })
    @IsNotEmpty()
    position: string;

    @ApiProperty({ example: '+123456789', description: 'The phone number of the employee' })
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the employee' })
    @IsEmail()
    @IsNotEmpty()
    email: string;
}

export class UpdateEmployeeDto extends CreateEmployeeDto {
    @ApiProperty({ example: 1, description: 'The ID of the employee' })
    id: number;
}

export class DeleteEmployeeDto {
    @ApiProperty({ example: [1, 2, 3], description: 'The IDs of the employees to delete' })
    ids: number[];
}
