import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ActionsModule, AuthModule, 
    MongooseModule.forRoot('mongodb://localhost:27017/BoaConta')
  ]
})
export class AppModule {}
