const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enables cross-origin requests from your frontend
app.use(express.json());

// 1. Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/myportfolio';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// 2. Define Project Schema & Model
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  link: String,
  github: String,
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

// 3. GET Route to fetch all projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve projects', error: error.message });
  }
});

// 4. GET Route to fetch a single project by ID
app.get('/api/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
