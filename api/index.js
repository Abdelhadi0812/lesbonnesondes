import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import bodyParser from 'body-parser';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('The connection to MongoDB is successfully set :)');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
