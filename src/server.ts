import * as Sentry from '@sentry/node';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import common from '../config/common';
import databaseConn from './helpers/databaseConn';
import {checkError, session} from './middleware';
import healthCheck from './routes/health-check';
import api from './routes';
import initSwagger from './helpers/initSwagger';
import swaggerUi from 'swagger-ui-express';

Sentry.init({dsn: common.sentryDSN});

const app = express();

const prepareServer = async () => {
  await databaseConn();

  return app.listen(common.port);
};

app.use(session);
app.use(logger('dev'));
app.use(helmet());

// health check router
app.use('/health-check', healthCheck);
// Sentry handler
app.use(Sentry.Handlers.errorHandler());
app.use(checkError);

const swaggerSpec = initSwagger();

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// api routes
app.use('/api', api);

export default async () => await prepareServer();
