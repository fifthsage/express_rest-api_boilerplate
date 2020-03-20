module.exports = {
  apps: [
    {
      name: 'rest_api',
      script: 'npm run start',
      env: {
        HOST: '0.0.0.0',
        PORT: 5000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 5000,
        HOST: '0.0.0.0',
        NODE_ENV: 'production',
      },
    },
  ],
};
