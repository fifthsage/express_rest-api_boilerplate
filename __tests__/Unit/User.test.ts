import UserService from '../../src/services/user/User';
import typeorm = require('typeorm');
import User from '../../src/entities/User';
import databaseConn, {closeDatabaseConn} from '../../src/helpers/databaseConn';
import faker from 'faker';

beforeAll(async () => {
  await databaseConn();
});

afterAll(async () => {
  await closeDatabaseConn();
});

describe('User', () => {
  it('get / not found', () => {
    const userService = new UserService();

    expect(userService.getUser(1)).rejects.toThrow(Error);
  });

  it('get / create', async () => {
    const userService = new UserService();
    const user = User.create({
      userName: faker.name.title(),
    });

    typeorm.getRepository = jest.fn().mockReturnValue({
      save: jest.fn().mockResolvedValue(user),
    });

    const result = await userService.create(user);

    expect(result).toBeInstanceOf(User);
    expect(result).toMatchObject<User>(user);
  });
});
