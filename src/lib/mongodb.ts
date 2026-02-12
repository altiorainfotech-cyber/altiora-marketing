import mongoose from 'mongoose';
import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: 'test'
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Native MongoDB client for direct database operations
let clientPromise: Promise<MongoClient> | null = null;

export async function getDatabase(): Promise<Db> {
  if (!clientPromise) {
    const client = new MongoClient(MONGODB_URI);
    clientPromise = client.connect();
  }
  
  const client = await clientPromise;
  return client.db();
}

export default connectDB;