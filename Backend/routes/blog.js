import express from 'express';
import Blog from '../models/Blog.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get all published blogs (Public)
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get single blog by ID (Public)
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all blogs including unpublished (Admin only)
router.get('/admin/all', authenticateAdmin, async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create blog (Admin only)
router.post('/', authenticateAdmin, async (req, res) => {
  try {
    const { title, shortDescription, longDescription, imageUrl, author, isPublished } = req.body;

    if (!title || !shortDescription || !longDescription) {
      return res.status(400).json({ message: 'Title, short description, and long description are required' });
    }

    const blog = new Blog({
      title,
      shortDescription,
      longDescription,
      imageUrl: imageUrl || '/images/default-blog.jpg',
      author: author || '360 Kavach Team',
      isPublished: isPublished !== undefined ? isPublished : true
    });

    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update blog (Admin only)
router.put('/:id', authenticateAdmin, async (req, res) => {
  try {
    const { title, shortDescription, longDescription, imageUrl, author, isPublished } = req.body;

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        shortDescription,
        longDescription,
        imageUrl,
        author,
        isPublished,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete blog (Admin only)
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Toggle publish status (Admin only)
router.patch('/:id/toggle-publish', authenticateAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
