import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './routes/auth.js';
import newsletterRoutes from './routes/newsletter.js';
import blogRoutes from './routes/blog.js';
import contactRoutes from './routes/contact.js';
import popupFormRoutes from './routes/popupForm.js';
import statsRoutes from './routes/stats.js';

// Import Admin model for initial setup
import Admin from './models/Admin.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/popup-forms', popupFormRoutes);
app.use('/api/stats', statsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: '360 Kavach API is running' });
});

// Create default admin if not exists
const createDefaultAdmin = async () => {
  try {
    const adminExists = await Admin.findOne({ email: process.env.ADMIN_EMAIL || 'admin@360kavach.com' });
    if (!adminExists) {
      const admin = new Admin({
        email: process.env.ADMIN_EMAIL || 'admin@360kavach.com',
        password: process.env.ADMIN_PASSWORD || 'admin123'
      });
      await admin.save();
      console.log('Default admin created successfully');
      console.log('Email:', process.env.ADMIN_EMAIL || 'admin@360kavach.com');
      console.log('Password:', process.env.ADMIN_PASSWORD || 'admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error.message);
  }
};

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/360kavach';

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await createDefaultAdmin();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API available at http://localhost:${PORT}/api`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  });
