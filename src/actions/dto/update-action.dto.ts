import { PartialType } from '@nestjs/swagger';
import { CreateActionDto } from './create-action.dto';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateActionDto extends PartialType(CreateActionDto) {

    @IsOptional()
    @IsString()
    account?: string;
  
    @IsOptional()
    @IsBoolean()
    type?: boolean;
  
    @IsOptional()
    @IsDateString()
    date?: string;
  
    @IsOptional()
    @IsString()
    category?: string;
  
    @IsOptional()
    @IsNumber()
    value_op?: number;

    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    @IsBoolean()
    recurrence?: boolean;
  
    @IsOptional()
    @IsString()
    recurrence_interval?: string;
    
    @IsOptional()
    @IsArray()
    next_ocurrence?: Array<Date>;
    
    @IsOptional()
    @IsDateString()
    compensation_date?: string;
}
