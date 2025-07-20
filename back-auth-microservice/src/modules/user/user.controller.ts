import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user..service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    this.appService.createUser(data);
  }
}