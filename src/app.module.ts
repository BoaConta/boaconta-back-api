import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/boaconta'),
    UserModule, 
    ActionsModule],
})
export class AppModule {}
