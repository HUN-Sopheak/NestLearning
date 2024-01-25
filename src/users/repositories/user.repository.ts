import { CreateUserDto } from './../dto/create-user.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserRepository } from './user.repository.interface';

@EntityRepository(User)
export class UserRepository extends Repository<User> implements IUserRepository {
    
    async createUser(user: User): Promise<User> {
        return this.save(user);
    }
    
    async findById(id: number): Promise<User | null> {
        const user = await this.findOne({ where: { id } });
        return user || null;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.findOne({ where: { email } });
    }

    async addUser(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.create(createUserDto);
        return this.save(newUser);
    }
}
