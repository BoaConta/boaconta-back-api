import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ActionsModule, AuthModule, ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/BoaConta')
  ]
})
export class AppModule {}
