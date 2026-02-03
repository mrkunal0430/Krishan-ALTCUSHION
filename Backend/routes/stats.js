import express from 'express';
import Newsletter from '../models/Newsletter.js';
import Blog from '../models/Blog.js';
import Contact from '../models/Contact.js';
import PopupForm from '../models/PopupForm.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get dashboard stats (Admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const [
      totalSubscribers,
      activeSubscribers,
      totalBlogs,
      publishedBlogs,
      totalContacts,
      unreadContacts,
      totalPopupForms,
      unreadPopupForms
    ] = await Promise.all([
      Newsletter.countDocuments(),
      Newsletter.countDocuments({ isActive: true }),
      Blog.countDocuments(),
      Blog.countDocuments({ isPublished: true }),
      Contact.countDocuments(),
      Contact.countDocuments({ isRead: false }),
      PopupForm.countDocuments(),
      PopupForm.countDocuments({ isRead: false })
    ]);

    res.json({
      newsletter: {
        total: totalSubscribers,
        active: activeSubscribers
      },
      blogs: {
        total: totalBlogs,
        published: publishedBlogs
      },
      contacts: {
        total: totalContacts,
        unread: unreadContacts
      },
      popupForms: {
        total: totalPopupForms,
        unread: unreadPopupForms
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
