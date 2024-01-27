import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repository/user.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly UserRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.UserRepository.create(createUserDto);
    return this.UserRepository.save(newUser);
  }

  findAll() {
    return this.UserRepository.find();
  }

  findOne(id: number) {
    return this.UserRepository.findOneBy({ id });
  }

  async update(id: number, UpdateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);

    Object.assign(user, UpdateUserDto);

    return await this.UserRepository.save(user);
  }

  async deleteUser(id: number) {
    const user = await this.findOne(id);
    return this.UserRepository.softDelete(user);
  }
}
