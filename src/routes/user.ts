import express from 'express';
import {Request, Response} from 'express';

import UserService from '../services/user/User';
import UserResource from '../api/resources/UserResource';

const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Return User By ID
 *     tags: [User]
 *     responses:
 *       200:
 *         description: User Info
 *         schema:
 *           $ref: '#/definitions/User'
 */

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const userService = new UserService();

    const user = await userService.getUser(parseInt(req.params.id));

    res.json(new UserResource(user));
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default router;
