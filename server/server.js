const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend from ../public
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// API routes
const feedbackRouter = require('./routes/feedback');
app.use('/', feedbackRouter); 


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
