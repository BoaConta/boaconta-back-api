
import { IsAlphanumeric, IsEmail, IsNotEmpty, Length } from 'class-validator';


export class LoginAuthDto {
    
  /**
   * Email para identificação do usuario 
   * @example usuario@email.com
   */
  @IsNotEmpty({message: 'O campo email não pode estar vazio!' })
  @IsEmail({}, {message: 'O campo email precisa ter um formato valido!'})
  email: string;

  /**
   * O campo email precisa conter entre 8 a 25, caracteres contendo Letra e Numero
   * @example us3r1234s
   */
  @IsNotEmpty()
  @IsAlphanumeric('pt-BR', {message: 'A senha só pode conter letras e numeros!'})
  @Length(8, 60, {message:'A senha precisa conter entre 8 e 25'})
  password: string;
}
