import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [UserModule, ActionsModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017'), ]
})
export class AppModule {}
