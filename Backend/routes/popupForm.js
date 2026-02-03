import express from 'express';
import PopupForm from '../models/PopupForm.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Submit popup form (Public)
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    const popupForm = new PopupForm({
      name,
      email,
      phone,
      message
    });

    await popupForm.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all popup form submissions (Admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const submissions = await PopupForm.find().sort({ submittedAt: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Mark as read (Admin only)
router.patch('/:id/read', authenticateAdmin, async (req, res) => {
  try {
    const submission = await PopupForm.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete submission (Admin only)
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    await PopupForm.findByIdAndDelete(req.params.id);
    res.json({ message: 'Submission deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
