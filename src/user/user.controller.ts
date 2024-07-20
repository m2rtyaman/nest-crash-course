import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags("User")
export class UserController {
    constructor(private readonly userService: UserService) {
    }
    @Post()
    create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }
    @Get()
    getActiveUsers() {
        return this.userService.activeUsers();
    }
    @Put(":id")
    update(
        @Param('id') UserId: string,
        @Body() updateUserDto: UpdateUserDto)
    {
        updateUserDto.id = UserId;
        return this.userService.update(updateUserDto);
    }
    @Delete(":id")
    delete(
        @Param('id') UserId: string,)
    {
        return this.userService.delete(UserId);
    }


}
