import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL || '', {
      dbName: 'DiscDriveDB',
    });

    isConnected = true;
    console.log('MongoDB is connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw new Error('Failed to connect to MongoDB');
  }
};
