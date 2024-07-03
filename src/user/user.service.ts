import { Injectable, ConflictException, HttpStatus, HttpException} from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
   constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const data = await this.userModel.findOne({email:createUserDto.email})
    if(data){
      throw new ConflictException('Email já cadastrado!')
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = passwordHash;

    await new this.userModel(createUserDto).save();
    throw new HttpException(`Usuario ${createUserDto.name} cadastrado!`, HttpStatus.CREATED)
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }   

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  //  }
}
