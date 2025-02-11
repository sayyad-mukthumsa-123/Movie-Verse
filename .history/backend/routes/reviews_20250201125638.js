// // const express = require('express');
// // const Review = require('../models/Review');
// // const router = express.Router();

// // // Add a review
// // router.post('/', async (req, res) => {
// //   try {
// //     const { movieId, username, rating, reviewText } = req.body;

// //     if (!movieId  || !rating || !reviewText) {
// //       return res.status(400).json({ message: 'All fields are required' });
// //     }

// //     const newReview = new Review({ movieId,  username, rating, reviewText });
// //     await newReview.save();

// //     res.status(201).json({ message: 'Review added successfully', review: newReview });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error', error: error.message });
// //   }
// // });

// // // Get reviews for a movie
// // router.get('/:movieId', async (req, res) => {
// //   try {
// //     const reviews = await Review.find({ movieId: req.params.movieId }).sort({ createdAt: -1 });

// //     if (!reviews.length) {
// //       return res.status(404).json({ message: 'No reviews found' });
// //     }

// //     res.json(reviews);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error', error: error.message });
// //   }
// // });

// // // Get average rating for a movie
// // router.get('/:movieId/average-rating', async (req, res) => {
// //   try {
// //     const reviews = await Review.find({ movieId: req.params.movieId });

// //     if (!reviews.length) {
// //       return res.json({ averageRating: 0 });
// //     }

// //     const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
// //     res.json({ averageRating });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error', error: error.message });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const Review = require('../models/Review');
// const router = express.Router();

// // Add a review
// router.post('/', async (req, res) => {
//   try {
//     const { movieId, username, rating, reviewText } = req.body;

//     if (!movieId  || !rating || !reviewText || !username) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }

//     const newReview = new Review({ movieId, username, rating, reviewText });
//     await newReview.save();

//     res.status(201).json({ message: 'Review added successfully', review: newReview });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // Get reviews for a movie
// router.get('/:movieId', async (req, res) => {
//   try {
//     const reviews = await Review.find({ movieId: req.params.movieId }).sort({ createdAt: -1 });

//     if (!reviews.length) {
//       return res.status(404).json({ message: 'No reviews found' });
//     }

//     res.json(reviews);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// // Get average rating for a movie
// router.get('/:movieId/average-rating', async (req, res) => {
//   try {
//     const reviews = await Review.find({ movieId: req.params.movieId });

//     if (!reviews.length) {
//       return res.json({ averageRating: 0 });
//     }

//     const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);
//     res.json({ averageRating });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// //delete review
// router.delete('/:reviewId', async (req, res) => {
//     const review = await Review.findById(req.params.reviewId);
//     if (!review) return res.status(404).send('Review not found');
    
//     if (review.username !== req.user.username) {  // Assuming req.user contains the logged-in user info
//       return res.status(403).send('You are not authorized to delete this review');
//     }
  
//     await review.remove();
//     res.status(200).send('Review deleted');
//   });
  

// module.exports = router;


//add middleware
const express = require('express');
const Review = require('../models/Review');
const authMiddleware = require('../middleware/middleware'); // Import the auth middleware
const router = express.Router();

// Add review
router.post('/', authMiddleware, async (req, res) => { 
  const { movieId, username, rating, reviewText } = req.body;

  if (!movieId || !rating || !reviewText || !username) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newReview = new Review({ movieId, username, rating, reviewText });
  await newReview.save();

  res.status(201).json({ message: 'Review added successfully', review: newReview });
});

// Get reviews
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

// Delete review - Protected by authMiddleware
router.delete('/:reviewId', authMiddleware, async (req, res) => {
  console.log(reviewId);
  
    try {
        const review = await Review.findById(req.params.reviewId);
        if (!review) return res.status(404).send('Review not found');
        
        if (review.username !== req.user.username) {  // Use the logged-in user's data (req.user)
          return res.status(403).send('You are not authorized to delete this review');
        }
    
        await review.remove();
        res.status(200).send('Review deleted');
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
