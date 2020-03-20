import {Service} from 'typedi';
import {getManager} from 'typeorm';
import User from '../../entities/User';

@Service()
class UserService {
  public async create(entity: User) {
    return await getManager().save(entity);
  }

  public async getUser(id: number): Promise<User> {
    return await getManager().findOneOrFail(User, {
      id,
    });
  }
}

export default UserService;
