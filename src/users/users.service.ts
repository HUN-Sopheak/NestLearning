import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}


  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // You may set default values or handle auto-increment in your service
    const newUser: User = {
      ...createUserDto,
      status: 1, 
      id: undefined,
      createdAt: new Date(), 
      updatedAt: new Date(),
    }

    return await this.userRepository.addUser(newUser);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
