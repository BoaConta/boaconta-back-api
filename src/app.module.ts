import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';
import { AuthModule } from './GoogleAuth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UserModule, ActionsModule, AuthModule, ConfigModule.forRoot()]
})
export class AppModule {}
