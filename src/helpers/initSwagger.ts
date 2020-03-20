import swaggerJSDoc from 'swagger-jsdoc';

// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'Caredoc Datawarehouse API', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'Caredoc Datawarehouse API', // Description (optional)
  },
  host: 'localhost:3000', // Host (optional)
};

// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ['./src/routes/**/*.ts', './src/api/**/*.ts'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
export default () => swaggerJSDoc(options);
