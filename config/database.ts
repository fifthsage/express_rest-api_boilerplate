require('dotenv').config({path: __dirname + '/../.env'});

export default {
  mysql: {
    default: {
      host: process.env.DB_HOST || '127.0.0.1',
      db: process.env.DB_DATABASE || 'default',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 3306,
    },
    test: {
      host: process.env.DB_HOST || '127.0.0.1',
      db: process.env.DB_DATABASE
        ? `${process.env.DB_DATABASE}_test`
        : 'default',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 3306,
    },
  },
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    user: process.env.REDIS_USER || 'root',
    password: process.env.REDIS_PASSWORD,
    port: process.env.REDIS_PORT || 6379,
  },
};
