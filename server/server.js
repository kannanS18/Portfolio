const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to receive form data and send email
app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    // Send email notification
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mseckannan.s@gmail.com',      // your Gmail address
        pass: 'jbvp zgoc rbsp cmyc',         // your Gmail App Password
      },
    });

    let mailOptions = {
      from: req.body.email,              // user's email from the form
      to: 'mseckannan.s@gmail.com',      // your email (recipient)
      subject: 'New Contact Form Submission',
      text: `Name: ${req.body.firstName} ${req.body.lastName}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).send({ message: 'Contact saved and email sent!' });
  } catch (err) {
    console.error('contact form error', err);
    res.status(500).send({ error: 'Failed to save contact or send email' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));