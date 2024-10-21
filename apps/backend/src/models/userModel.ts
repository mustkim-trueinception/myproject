import { Schema, model } from 'mongoose';

// Define the User interface
export interface User {
  username: string;
  email: string;
  password: string;
}

// Create the User schema
const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create the User model
export const UserModel = model<User>('User', userSchema);
