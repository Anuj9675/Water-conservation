const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/authRouters');
const usersRouter = require('./routes/userRouters');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Use cors for handling cross-origin requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRouter); // Use the users router

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'Frontend/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Frontend/build/index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    // No need for useNewUrlParser and useUnifiedTopology as they are default now
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err.message);
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
