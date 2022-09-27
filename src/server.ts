import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';

import swaggerFile from './swagger.json';

import './database/data-source';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3333, () => {
  console.log('🚀 Server is runningin   http://localhost:3333');
  console.log('📗 Documentation in      http://localhost:3333/api-docs/');
});