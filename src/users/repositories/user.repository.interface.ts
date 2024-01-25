import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

export interface IUserRepository{
    save(newUser: unknown): User | PromiseLike<User>;
    addUser(createUserDto: CreateUserDto): unknown;
    findById(id:Number): Promise<User | null>;
    findByEmail(email:string): Promise<User | null>;
    createUser(user:User): Promise<User>;
}