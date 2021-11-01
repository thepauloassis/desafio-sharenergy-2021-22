import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

interface IClient {
  clientNumber: string;
  clientName: string;
  companyId?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  observation?: string;
  factory: {
    factoryId: string;
    participationPercentage: number;
  };
}

const clientSchema = new mongoose.Schema<IClient>(
  {
    clientNumber: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: false,
      default: '',
    },
    email: {
      type: String,
      required: false,
      default: '',
    },
    phoneNumber: {
      type: String,
      required: false,
      default: '',
    },
    address: {
      type: String,
      required: false,
      default: '',
    },
    observation: {
      type: String,
      required: false,
      default: '',
    },
    factory: {
      factoryId: {
        type: String,
        required: true,
      },
      participationPercentage: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: true,
    collection: 'clients',
  },
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
