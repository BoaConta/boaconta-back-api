import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtStrategy } from './jwt/jwt.strategy';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt/constants';

import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { GoogleStrategy } from './google/GoogleStrategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.register({
      global: true,
      secret:jwtConstants.secret,
      signOptions: {expiresIn: '5000s'}
    })
  ] ,
  controllers: [AuthController],
  providers: [JwtStrategy,AuthService,GoogleStrategy],
  exports: [AuthService]
})
export class AuthModule {}
