const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Add a review
router.post('/', async (req, res) => {
  try {
    const { movieId, username, rating, reviewText } = req.body;

    if (!movieId  || !rating || !reviewText) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newReview = new Review({ movieId,  username, rating, reviewText });
    await newReview.save();

    res.status(201).json({ message: 'Review added successfully', review: newReview });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get reviews for a movie
router.get('/:movieId', async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId }).sort({ createdAt: -1 });

    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found' });
    }

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get average rating for a movie
router.get('/:movieId/average-rating', async (req, res) => {
  try {
    const reviews = await Review.find({ movieId: req.params.movieId });

    if (!reviews.length) {
      return res.json({ averageRating: 0 });
    }

    const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
    res.json({ averageRating });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
