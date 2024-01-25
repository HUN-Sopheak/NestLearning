import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number; // Use 'number' instead of 'BigInt' if your database uses an integer type for auto-incrementing primary keys

  @Column({ length: 50, nullable: false })
  full_name: string;

  @Column({ nullable: false, length: 50 })
  username: string;

  @Column({ nullable: true, length: 50 })
  email: string;

  @Column({ nullable: false, length: 255 })
  password: string;

  @Column({ nullable: false, default: 1, comment: '1.Active 2.Deactivate' })
  status: number; // Use 'number' instead of 'Number'

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
