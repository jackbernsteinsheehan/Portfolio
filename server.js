const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Store subscriptions in memory (in a real app, you'd use a database)
const subscriptions = [];

// Newsletter subscription endpoint
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if email already exists
    if (subscriptions.includes(email)) {
        return res.status(409).json({ error: 'Email already subscribed' });
    }

    // Add email to subscriptions
    subscriptions.push(email);
    
    // Send success response
    res.status(200).json({ 
        message: 'Successfully subscribed to newsletter',
        email: email
    });
});

// Get all subscriptions (for testing purposes)
app.get('/api/subscriptions', (req, res) => {
    res.json({ subscriptions });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 