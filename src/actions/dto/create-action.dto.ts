import { IsArray, IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator";

export class CreateActionDto {
  
  @IsNotEmpty()
  @IsString()
  account: string;

  @IsNotEmpty()
  @IsBoolean()
  type: boolean;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsNumber()
  value_op: number;

  @IsString()
  description?: string;

  @IsBoolean()
  recurrence?: boolean;

  @IsString()
  recurrence_interval?: string;
  
  @IsArray()
  next_ocurrence?: Array<Date>;
  
  @IsDateString()
  compensation_date?: string;
  
  @IsObject()
  user_id: object;
}