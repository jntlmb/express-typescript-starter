import express from 'express';
import itemRoutes from './routes/item.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(express.json());

// Routes
app.use('/api/v1/items', itemRoutes);

// Middleware
app.use(errorHandler);

export default app;
