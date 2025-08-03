const connectDB = require('./db');
connectDB();

const express = require('express');
const cors = require('cors');
const Feedback = require('./models/Feedback');
const Subscriber = require('./models/Subscriber');
const Alert = require('./models/Alert');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Dummy dynamic data
const tips = [
  "✅ Use strong and unique passwords",
  "🔐 Enable two-factor authentication",
  "📧 Be cautious of suspicious emails",
  "🛡️ Keep your software updated"
];

// Root route (for testing)
app.get('/', (req, res) => {
  res.status(200).send('✅ Backend is running!');
});

// GET /api/tips
app.get('/api/tips', (req, res) => {
  res.status(200).json({ tips });
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
  console.log('📩 New contact form submission:', req.body);
  res.status(200).json({ message: '✅ Thank you for contacting us!' });
});

// ✅ Feedback routes
app.post('/api/feedback', async (req, res) => {
  try {
    const newFeedback = new Feedback(req.body);
    await newFeedback.save();
    res.status(201).json({ message: '✅ Feedback saved' });
  } catch (error) {
    console.error('❌ Error saving feedback:', error);
    res.status(500).json({ message: '❌ Failed to save feedback' });
  }
});

app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to get feedbacks' });
  }
});

app.delete('/api/feedback/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ Feedback deleted' });
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to delete feedback' });
  }
});

// ✅ Subscriber routes
app.post('/api/subscribe', async (req, res) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    await newSubscriber.save();
    res.status(201).json({ message: '✅ Subscribed successfully' });
  } catch (error) {
    res.status(500).json({ message: '❌ Subscription failed' });
  }
});

// ✅ Alerts routes
app.post('/api/alerts', async (req, res) => {
  try {
    const newAlert = new Alert(req.body);
    await newAlert.save();
    res.status(201).json({ message: '✅ Alert added' });
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to add alert' });
  }
});

app.get('/api/alerts', async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ createdAt: -1 });
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: '❌ Failed to get alerts' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
