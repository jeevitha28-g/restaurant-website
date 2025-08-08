const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/submit-feedback', async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ message: 'Please provide name, phone and message.' });
    }

    const sql = 'INSERT INTO feedback (name, phone, message) VALUES (?, ?, ?)';
    const [result] = await db.execute(sql, [name, phone, message]);

    return res.json({ message: 'Feedback submitted successfully!', id: result.insertId });
  } catch (err) {
    console.error('DB error:', err);
    return res.status(500).json({ message: 'Server error saving feedback.' });
  }
});

module.exports = router;
