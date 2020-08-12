import { Model } from 'mongoose';
import { Injectable, Inject, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { bcrypt } from 'bcrypt';
import { config } from './../../config'

import { User } from '../models/user.schema';
import { CreateUserDto } from '../models/dto/create-user.dto';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User>{
        bcrypt.hash(createUserDto.password, config.APP_SALT_ROUNDS,  (err, hash) => {
            createUserDto.hash_pw = hash
        });
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findBy(where: any): Promise<User>{
        return this.userModel.findOne(where).exec();
    }


    async connect(email: string, password: string): Promise<User | any> {
        let user = await this.findBy({ email : email })
        if (user) {
            bcrypt.compare(password, user.hash_pw, function (err, result) {
                return result;
            });
        }
    }


}