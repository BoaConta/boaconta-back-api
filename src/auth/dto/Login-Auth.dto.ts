
import { IsEmail, IsNotEmpty, Length } from 'class-validator';


export class LoginAuthDto {
    
  /**
     *  Email será usado para fazer login
     *  @example email@email.com
     */
  @IsNotEmpty({ message: 'O campo EMAIL não pode ser vazio' })
  @IsEmail({}, { message: 'Email inválido.' })
  email: string;

  /**
    * usado para fazer login
    * @example teste1234
    */
  @IsNotEmpty({ message: 'O campo SENHA não pode ser vazio' })
  @Length(8, 60, { message: 'A senha precisa ter entre 8 e 60 caracteres' })
  password: string;
}
