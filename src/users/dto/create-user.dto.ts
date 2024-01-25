
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    readonly full_name: string;
    
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;

    @IsEmail()
    readonly email: string;

    // @IsDate()
    // readonly createdAt: Date;

    // @IsDate()
    // readonly updatedAt: Date;

}