import { CreateUserDto } from '../dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export interface UserRepository extends Repository<User> {
  //   getUsers(): Promise<User[]>;
  //   createUser(CreateUserDto: CreateUserDto): Promise<User>;
}
