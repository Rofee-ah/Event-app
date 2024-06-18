const express = require('express');
const events = require('../model/event');

const router = express.Router();

router.post('/post/event', async (req, res) => {
  try {
    const event = await events.findOne({ eventName: req.body.eventName });
    if (event) return res.status(403).json('Event already exist');

    const newEvent = new events({
      eventName: req.body.eventName,
      image: req.body.image,
      price: req.body.price,
      isUpcoming: req.body.isUpcoming,
      location: req.body.location,
      category: req.body.category,
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.log(error);
    res.status(404).json('server error');
  }
});

router.get('/upcoming/event', async (req, res) => {
  try {
    const event = await events.find({
      isUpcoming: true,
    });
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(404).json('server error');
  }
});

router.get('/happening/event', async (req, res) => {
  try {
    const event = await events.find({
      isUpcoming: false,
    });
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(404).json('server error');
  }
});

router.get('/event/total', async (req, res) => {
  try {
    const totalEvents = await events.countDocuments();
    res.status(200).json({ total: totalEvents });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/event/:id', async (req, res) => {
  try {
    const event = await events.findById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(404).json('server error');
  }
});

module.exports = router;
