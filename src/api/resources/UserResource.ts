import User from '../../entities/User';
import RoleResource from './RoleResource';

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: User ID
 *       name:
 *         type: string
 *         description: User Name
 *       role:
 *         $ref: '#/definitions/Role'
 */

class UserResource {
  public id: number;
  public name: string;
  public role: RoleResource;

  constructor(entity: User) {
    this.id = entity.id;
    this.name = entity.userName;
    this.role = new RoleResource(entity.role);
  }
}

export default UserResource;
