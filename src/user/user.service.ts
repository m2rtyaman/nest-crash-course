import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from "uuid";
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>) {
    }

    async activeUsers() {
        return await this.userRepository.find()
    }
    async create(createUserDto: CreateUserDto) {
        const newUser = await this.userRepository.create(createUserDto);
        newUser.id = uuidv4()
        newUser.email = createUserDto.email
        newUser.name = createUserDto.name
        newUser.birthday = createUserDto.birthday
        await this.userRepository.save(newUser);
        return { message: "Saved", newUser }
    }
    async update(updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findOne({
            where: {
                id: updateUserDto.id,
            },
            relations:["Product"]
        })
        if (user) {
            user.name = updateUserDto.name;
            user.email = updateUserDto.email;
        } else {
        }
        await this.userRepository.save(user)
    }
    async delete(UserId: string) {
    return await this.userRepository.softDelete(UserId);
    }

}
