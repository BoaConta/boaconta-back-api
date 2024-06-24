import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Logger, HttpException } from '@nestjs/common';
import { ActionsService } from './actions.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
import { ApiTags } from '@nestjs/swagger';
import mongoose from 'mongoose';

@ApiTags('actions')
@Controller('user/actions')
export class ActionsController {

  private readonly logger = new Logger(ActionsController.name);

  constructor(private readonly actionsService: ActionsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createActionDto: CreateActionDto) {
    console.log('teste')
    return this.actionsService.create(createActionDto);
  }

  @Get('get')
  findAll() {
    this.logger.debug('calling findall endpoint')
    const actions = this.actionsService.findAll();
    console.log('actions found: ' + actions);
    return actions;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Action not found.', 404)

    const findAction = await this.actionsService.findOne(id);
    if (!findAction ) throw new HttpException('Action not found.', 404);
    return findAction;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateActionDto: UpdateActionDto) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Action not found.', 404)
      
    const updatedAction = await this.actionsService.update(id, updateActionDto);
    if(!updatedAction) throw new HttpException('Action not found.', 404);
    return updatedAction;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new HttpException('Action not found.', 404)

    const deletedAction = await this.actionsService.remove(id);
    if(!deletedAction) throw new HttpException('Action not found.', 404);
    return;
  }
}