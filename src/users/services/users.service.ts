
import { Injectable, Inject, Query } from '@nestjs/common';
import bcrypt from 'bcrypt'

import { config } from './../../config'
import { User } from '../models/user.entity';
import { CreateUserDto } from '../models/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, DeleteResult } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>,
        private connection: Connection
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto): Promise<User>{
        bcrypt.hash(createUserDto.password, config.APP_SALT_ROUNDS,  (err, hash) => {
            createUserDto.password = hash
        });
        return this.userRepository.save(createUserDto);
    }

    async findBy(where: any): Promise<User>{
        return this.userRepository.findOne(where)
    }


    async connect(email: string, password: string): Promise<User | any> {
        let user = await this.findBy({ email : email })
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                return result;
            });
        }
    }

    async remove(id: string): Promise<DeleteResult> {
        return this.userRepository.delete(id);
    }


}