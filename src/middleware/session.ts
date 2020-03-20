import connectRedis from 'connect-redis';
import session from 'express-session';
import redis from 'redis';
import common from '../../config/common';

const sessionOptions = {
  secret: common.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false},
};

// if (common.env === "production" && common.redisHost) {
if (common.redisHost && common.env !== 'test') {
  const RedisStore = connectRedis(session);

  const client = redis.createClient({
    host: common.redisHost,
    db: 0,
  });

  Object.assign(sessionOptions, {
    store: new RedisStore({client}),
  });
}

export default session(sessionOptions);
