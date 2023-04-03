import express from 'express';

import userRouter from './routes/user';
import beansRouter from './routes/beans';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/beans', beansRouter);

app.listen(PORT, () => {
  console.log(`Server started (PORT: ${PORT})`);
});
