import express from 'express';
import Newsletter from '../models/Newsletter.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Subscribe to newsletter (Public)
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const existingSubscriber = await Newsletter.findOne({ email });
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return res.status(400).json({ message: 'Already subscribed' });
      }
      existingSubscriber.isActive = true;
      await existingSubscriber.save();
      return res.json({ message: 'Subscription reactivated successfully' });
    }

    const subscriber = new Newsletter({ email });
    await subscriber.save();
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all subscribers (Admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete subscriber (Admin only)
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subscriber deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Toggle subscriber status (Admin only)
router.patch('/:id/toggle', authenticateAdmin, async (req, res) => {
  try {
    const subscriber = await Newsletter.findById(req.params.id);
    if (!subscriber) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    subscriber.isActive = !subscriber.isActive;
    await subscriber.save();
    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
