import express, { Response, Request, NextFunction } from 'express';
import productsRouter from './routers/products.router';
import { Error } from './types/Error';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  const status = error.status || 500;
  const message = 'Internal Service Error';
  console.log({ ERROR: error.message });
    
  res.send(status).json({ message });
});

export default app;
