import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

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

app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: '500mb',
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
