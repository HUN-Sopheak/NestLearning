import { IsString, IsOptional, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsOptional() // Indicates the property is optional for updates
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
