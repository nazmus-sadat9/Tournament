import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export const dynamic = 'force-static';

const MONGODB_URI = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

// 1. Define the Project Schema & Model
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  link: String,
  github: String,
});

// Reuse existing model if already compiled, or create a new one
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export async function GET() {
  try {
    if (!MONGODB_URI) {
      throw new Error('MONGO_URI environment variable is missing');
    }

    await connectDB();
    const projects = await Project.find({});
    
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { message: 'Failed to fetch projects', error: error.message },
      { status: 500 }
    );
  }
}
