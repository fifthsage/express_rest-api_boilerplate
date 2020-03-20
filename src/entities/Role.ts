import {Column, Entity, BaseEntity, PrimaryGeneratedColumn} from 'typeorm';

export enum ROLE_TYPE {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Entity('roles')
class Role extends BaseEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({
    name: 'user_id',
    type: 'int',
    nullable: false,
  })
  userId: number;

  @Column({
    name: 'role_name',
    type: 'enum',
    enum: ROLE_TYPE,
    default: ROLE_TYPE.USER,
    nullable: false,
  })
  role: ROLE_TYPE;

  @Column({name: 'deleted_at', type: 'timestamp', nullable: true})
  deletedAt?: Date | null;

  public delete(): void {
    this.deletedAt = new Date();
  }
}

export default Role;
