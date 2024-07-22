import express, { Response, Request, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import yaml from 'yaml';
import path from 'path';
import productsRouter from './routers/products.router';
import { Error } from './types/Error';
import usersRouter from './routers/users.route';
import loginRouter from './routers/login.router';

const filePathResolve = path.resolve(__dirname, './document/trybersmith.yaml');
const file = fs.readFileSync(filePathResolve, 'utf8');
const swaggerDocument = yaml.parse(file);

const app = express();

app.use(express.json());

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status || 500;
  const message = 'Internal Service Error';
  console.log({ ERROR: error.message });
    
  res.send(status).json({ message });
});

export default app;
