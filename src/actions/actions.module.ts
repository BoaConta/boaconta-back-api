import { Module } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { ActionsController } from './actions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ActionSchema } from './schema/action.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Action',
        schema: ActionSchema,
      },
    ])
  ],
  controllers: [ActionsController],
  providers: [ActionsService],
})
export class ActionsModule {}
