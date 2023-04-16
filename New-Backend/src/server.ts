import express from 'express';
import dotenv from 'dotenv';
import router from './routes/chats';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use('/api', router);

// We link out router files here to make our route easy
app.listen(PORT, () =>
  console.log(`Server is listening to http://localhost:${PORT}`)
);
