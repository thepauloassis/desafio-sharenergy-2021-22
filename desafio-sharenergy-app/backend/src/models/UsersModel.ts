import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'users',
  },
);

const User = mongoose.model('User', userSchema);

export default User;
