import { User } from './user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    createUser = async (createUserDto: CreateUserDto) => {
        return await this.save(createUserDto);
    };

    findOneUser = async (id: string) => {
        return this.findOneOrFail(id);
    };

    updateUser = async (id: string, createUserDto: CreateUserDto) => {
        return this.save({ ...createUserDto, id: Number(id) });
    };

    removeUser = async (id: string) => {
        await this.findOneOrFail(id);
        return this.delete(id);
    };
}