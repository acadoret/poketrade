import { Controller, Inject, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../models/dto/create-user.dto';
import { User } from '../models/user.schema';
import { Card } from 'src/cards/models/schema/card.schema';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'User has been successfully created.' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    
    @Get(':username')
    @ApiOkResponse({ status: 201, description: 'Card fetched' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('username') username): Promise<User> {
        return this.userService.findBy({username: username});
    }

    @Put(':id')
    @ApiOkResponse({ status: 201, description: 'Cards updated' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    update(@Param('id') id, @Body() updateUserDto): string {
        return `MAJ de la Carte #${id}`
    }

    @Delete(':id')
    @ApiOkResponse({ status: 201, description: 'Cards deleted' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    delete(@Param('id') id): string {
        return `Suppression de la Carte #${id}`
    }
}
