import {
  Column,
  Entity,
  BaseEntity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Role from './Role';

@Entity('actors')
class User extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({
    name: 'user_name',
    type: 'varchar',
    nullable: false,
  })
  userName: string;

  @Column({name: 'deleted_at', type: 'timestamp', nullable: true})
  deletedAt?: Date | null;

  @OneToOne(
    () => Role,
    role => role.userId,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      cascade: ['insert'],
      nullable: true,
    },
  )
  role: Role;

  public delete(): void {
    this.deletedAt = new Date();
  }
}

export default User;
