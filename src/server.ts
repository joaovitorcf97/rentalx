import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { router } from './routes';

import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(3333, () => {
  console.clear();
  console.log('🚀 Server is runningin   http://localhost:3000');
  console.log('📗 Documentation in      http://localhost:3333/api-docs/');
});