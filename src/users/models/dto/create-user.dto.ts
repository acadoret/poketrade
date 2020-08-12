import { ApiProperty } from '@nestjs/swagger';
/**
 * DTO Class for User Document 
 */
export class CreateUserDto {

    uid: number;
    @ApiProperty({ required: true })
    username: string;
    @ApiProperty({ required: true})
    email: string;
    @ApiProperty({ required: true })
    password: string;
    hash_pw: string;
}