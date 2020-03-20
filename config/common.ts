require('dotenv').config({path: __dirname + '/../.env'});

const common = {
  env: process.env.NODE_ENV || 'development',
  serverEnv: process.env.ENV || 'local',
  imagePath: process.env.IMAGE_PATH || '',
  sentryDSN: process.env.SENTRY_DSN,
  sessionSecret: process.env.SESSION_SECRET || 'keyboardcat',
  storageEngine: process.env.STORAGE_ENGINE || 'local',
  port: (process.env.PORT && parseInt(process.env.PORT, 10)) || 5000,
  corsDomain: process.env.CORS_DOMAIN || '*',
  redisHost: process.env.REDIS_HOST,
  apiUrl: process.env.GQL_PLAYGROUND_API_URL || 'http://localhost:5000/api',
  privacySymmetricKey: process.env.PRIVACY_SYMMETRIC_KEY || '',
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  slackApiToken: process.env.SLACK_API_TOKEN || '',
};

export default common;
