import request from 'supertest';
import server from '../../src/server';

let app;

beforeAll(() => {
  return server().then(_app => {
    app = _app;
  });
});

describe('User', () => {
  it('get / not found', done => {
    expect(request(app).get('/api/user')).rejects.toThrow(Error);
    done();
  });
});
