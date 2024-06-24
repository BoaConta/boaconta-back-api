import { Injectable } from '@nestjs/common';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Action, ActionDocument } from './schema/action.schema';

@Injectable()
export class ActionsService {
  constructor(@InjectModel('Action') private actionModel: Model<ActionDocument>) {}

  create(createActionDto: CreateActionDto) {
    const newAction = new this.actionModel(createActionDto);
    return newAction.save();
  }

  findAll() {
    console.log('teste')
    return this.actionModel.find().exec();
  }

  findOne(id: string) {
    return this.actionModel.findById(id);
  }

  update(id: string, updateActionDto: UpdateActionDto) {
    return this.actionModel.findByIdAndUpdate(id, updateActionDto);
  }

  remove(id: string) {
    return this.actionModel.findByIdAndDelete(id);
  }
}
