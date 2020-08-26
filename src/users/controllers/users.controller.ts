import { Controller, Inject, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../models/dto/create-user.dto';
import { User } from '../models/user.entity';
import { DeleteResult } from 'typeorm';

import { UserRepository } from '../models/user.repository';
import { InjectRepository } from '@nestjs/typeorm';


@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(
        @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
        public userService: UsersService
    ){}

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'User has been successfully created.' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    
    @Get(':id')
    @ApiOkResponse({ status: 201, description: 'Card fetched' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('id') id): Promise<User> {
        return this.userRepository.findOneUser(id);
    }

    @Put(':id')
    @ApiOkResponse({ status: 201, description: 'Cards updated' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    update(@Param('id') id, @Body() updateUserDto: CreateUserDto): Promise<User> {
        return this.userRepository.updateUser(id, updateUserDto)
    }

    @Delete(':id')
    @ApiOkResponse({ status: 201, description: 'Cards deleted' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    delete(@Param('id') id): Promise<DeleteResult> {
        return this.userService.remove(id)
    }
}
