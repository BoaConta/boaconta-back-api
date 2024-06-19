import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [UserModule, ActionsModule]
})
export class AppModule {}
