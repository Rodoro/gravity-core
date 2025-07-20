import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user..service';
import { UsersRepository } from './users.repository';

@Module({
    controllers: [UserController],
    providers: [UserService, UsersRepository],
    imports: [],
})
export class UserModule { }