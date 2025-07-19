import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor() {}

  @Post('regoster')
  etHello() {

  }

  @Post('login')
  getHello() {
  }
}
