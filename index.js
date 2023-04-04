import express from 'express';

import userRouter from './routes/user.js';
import beansRouter from './routes/beans.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/beans', beansRouter);

// Lägg middleware här för skicka tillbaka error om att route inte finns

app.listen(PORT, () => {
  console.log(`Server started (PORT: ${PORT})`);
});
