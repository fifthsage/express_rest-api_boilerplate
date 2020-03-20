import Role from '../../entities/Role';

/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role
 * definitions:
 *   Role:
 *     type: object
 *     properties:
 *       id:
 *         type: integer
 *         description: Role ID
 *       role:
 *         type: string
 *         description: Role Name
 */

class RoleResource {
  public id: number;
  public role: string;

  constructor(entity: Role) {
    this.id = entity.id;
    this.role = entity.role;
  }
}

export default RoleResource;
