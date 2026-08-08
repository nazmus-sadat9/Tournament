import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export const dynamic = 'force-static';

const MONGODB_URI = process.env.MONGO_URI;

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGODB_URI);
}

const TeamSchema = new mongoose.Schema({
  title: String,
  members: [String]
});

const Team = mongoose.models.Team || mongoose.model('Team', TeamSchema);

export async function POST(req) {

  try {
    await connectDB();

    const body = await req.json();
    const { title, members } = body;

    const isExists = await Team.findOne({ title });

    if (isExists) {

      return NextResponse.json({message: "Team already exists!"}, {status: 409});
    
    }

    await Team.create({ title, members });
    
    return NextResponse.json({message: "team registered successfully."}, { status: 201 });

  } catch (err) {
    
    return NextResponse.json({status: 500 });
  }
}
