import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from '../user/dto/Login-Auth.dto';

import { User } from 'src/user/schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) 
    private model: Model<User>,
    private jwtService: JwtService,
   
  ){}
 
   async login(loginauthDto: LoginAuthDto ) {
    const data = await this.model.findOne({email: loginauthDto.email });
    if (!data) {
      throw new UnauthorizedException('Email não existe!!');
    }
    const isMatch = await bcrypt.compare(loginauthDto.password, data.password);
    if (!isMatch) {
      throw new UnauthorizedException('Senha incorreta!!');
    }

    const payload = { id: data.id, email: data.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
   
  }
}
