import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UserModule, ActionsModule, AuthModule, 
    MongooseModule.forRoot('mongodb://localhost:27017/BoaConta')
  ]
})
export class AppModule {}
