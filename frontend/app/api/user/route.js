export const dynamic = 'force-static';

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// 1. MongoDB Connection Helper
const MONGODB_URI = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}


export async function GET() {
  try {
    await connectDB();
  
    const projects = await Project.find({});

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {

    return NextResponse.json(
      { message: 'Failed to fetch projects', error: error.message },
      { status: 500 }
    );
  }
}
