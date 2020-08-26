import { ApiProperty } from '@nestjs/swagger';
/**
 * DTO Class for User Class 
 */
export class CreateUserDto {
    @ApiProperty()
    readonly username: string;
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    readonly firstName?: string;
    @ApiProperty()
    readonly lastName?: string;
}