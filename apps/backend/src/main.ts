import { UserModel } from '@model'; // This will trigger the eslint error

import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/mydatabase')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Example Route to Create a User
app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  const user = new UserModel({ username, email, password });
  await user.save();
  res.status(201).send(user);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
