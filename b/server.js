import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import Contact from './schema.js';
import mongoose from 'mongoose';

// server 
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    await newContact.save();
    res.status(200).json({ code: 200, status: "Message Saved" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the message" });
  }
});

app.listen(5500, () => console.log("Server Running"));