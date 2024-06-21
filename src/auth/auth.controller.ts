import { Controller, Body, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/Login-Auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}