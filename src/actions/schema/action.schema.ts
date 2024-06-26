import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActionDocument = HydratedDocument<Action>;

@Schema()
export class Action {
  @Prop()
  account: string;

  @Prop()
  type: boolean;

  @Prop()
  date: Date;
  
  @Prop()
  category: string;
  
  @Prop()
  value_op: number;

  @Prop()
  description?: string;

  @Prop()
  recurrence?: boolean;

  @Prop()
  recurrence_interval?: string;
  
  @Prop()
  next_ocurrence?: Array<Date>;
  
  @Prop()
  compensation_date?: Date;

  @Prop(raw({
    _id: {type: String},
    email: {type: String},
  }))
  user_id: object;
}

export const ActionSchema = SchemaFactory.createForClass(Action);