import { Controller, Body, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/Login-Auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { GoogleAuthGuard } from './google/Guards';

@ApiTags('user')
@Controller('user')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }

  @Post('google/login')
    @UseGuards(GoogleAuthGuard)
    googleLogin() {
      return { msg: 'Google login' };
  }

  @Post('google/redirect')
  @UseGuards(GoogleAuthGuard)
  googleRedirect() {
    return { msg: 'Ok' };
  }
  
}