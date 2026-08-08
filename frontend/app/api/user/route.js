import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export const dynamic = 'force-static';

const MONGODB_URI = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}


export async function GET() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGO_URI environment variable is missing');
    }

    await connectDB();
    const projects = await Team.find({});
    
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch teams', error: error.message },
      { status: 500 }
    );
  }
}
