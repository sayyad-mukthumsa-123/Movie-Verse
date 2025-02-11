// // import { useEffect, useState } from 'react';
// // import axios from 'axios';

// // const ReviewRating = ({ movieId }) => {
// //   const [reviews, setReviews] = useState([]);
// //   const [reviewText, setReviewText] = useState('');
// //   const [rating, setRating] = useState(5);
// //   const [username, setUsername] = useState('');
// //   const [averageRating, setAverageRating] = useState(0);

// //   useEffect(() => {
// //     fetchReviews();
// //     fetchAverageRating();
// //   }, []);

// //   const fetchReviews = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// //       setReviews(res.data);
// //     } catch (error) {
// //       console.error(error.response?.data?.message || 'Error fetching reviews');
// //     }
// //   };

// //   const fetchAverageRating = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// //       setAverageRating(res.data.averageRating);
// //     } catch (error) {
// //       console.error(error.response?.data?.message || 'Error fetching rating');
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userId = '12345'; // Replace with actual user ID from authentication
// //       await axios.post('http://localhost:5000/api/reviews', {
// //         movieId,
// //         userId,
// //         username,
// //         rating,
// //         reviewText,
// //       });

// //       setReviewText('');
// //       fetchReviews();
// //       fetchAverageRating();
// //     } catch (error) {
// //       console.error(error.response?.data?.message || 'Error submitting review');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Movie Reviews</h2>
// //       <p>Average Rating: {averageRating} ⭐</p>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           placeholder="Your Name"
// //           value={username}
// //           onChange={(e) => setUsername(e.target.value)}
// //           required
// //         />
// //         <select value={rating} onChange={(e) => setRating(e.target.value)}>
// //           {[1, 2, 3, 4, 5].map((num) => (
// //             <option key={num} value={num}>
// //               {num} ⭐
// //             </option>
// //           ))}
// //         </select>
// //         <textarea
// //           placeholder="Write a review..."
// //           value={reviewText}
// //           onChange={(e) => setReviewText(e.target.value)}
// //           required
// //         ></textarea>
// //         <button type="submit">Submit</button>
// //       </form>

// //       <div>
// //         <h3>Reviews:</h3>
// //         {reviews.length === 0 ? (
// //           <p>No reviews yet.</p>
// //         ) : (
// //           reviews.map((review) => (
// //             <div key={review._id}>
// //               <p>
// //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// //               </p>
// //               <p>{review.reviewText}</p>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReviewRating;


// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; // Import useParams to get params from the route

// const ReviewRating = () => {
//   const { movieId } = useParams(); // Get movieId from the URL params
//   const [reviews, setReviews] = useState([]);
//   const [reviewText, setReviewText] = useState('');
//   const [rating, setRating] = useState(5);
//   const [username, setUsername] = useState('');
//   const [averageRating, setAverageRating] = useState(0);

//   useEffect(() => {
//     fetchReviews();
//     fetchAverageRating();
//   }, [movieId]);

//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
//       setReviews(res.data);
//     } catch (error) {
//       console.error(error.response?.data?.message || 'Error fetching reviews');
//     }
//   };

//   const fetchAverageRating = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
//       setAverageRating(res.data.averageRating);
//     } catch (error) {
//       console.error(error.response?.data?.message || 'Error fetching rating');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = '12345'; // Replace with actual user ID from authentication
//       await axios.post('http://localhost:5000/api/reviews', {
//         movieId,
//         userId,
//         username,
//         rating,
//         reviewText,
//       });

//       setReviewText('');
//       fetchReviews();
//       fetchAverageRating();
//     } catch (error) {
//       console.error(error.response?.data?.message || 'Error submitting review');
//     }
//   };

//   return (
//     <div>
//       <h2>Movie Reviews</h2>
//       <p>Average Rating: {averageRating} ⭐</p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <select value={rating} onChange={(e) => setRating(e.target.value)}>
//           {[1, 2, 3, 4, 5].map((num) => (
//             <option key={num} value={num}>
//               {num} ⭐
//             </option>
//           ))}
//         </select>
//         <textarea
//           placeholder="Write a review..."
//           value={reviewText}
//           onChange={(e) => setReviewText(e.target.value)}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h3>Reviews:</h3>
//         {reviews.length === 0 ? (
//           <p>No reviews yet.</p>
//         ) : (
//           reviews.map((review) => (
//             <div key={review._id}>
//               <p>
//                 <strong>{review.username}</strong> ({review.rating} ⭐)
//               </p>
//               <p>{review.reviewText}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewRating;


import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to get params from the route

const ReviewRating = () => {
  const { movieId } = useParams(); // Get movieId from the URL params
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [username, setUsername] = useState('');
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
    fetchAverageRating();
  }, [movieId]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
      setReviews(res.data);
    } catch (error) {
      console.error(error.response?.data?.message || 'Error fetching reviews');
    }
  };

  const fetchAverageRating = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
      setAverageRating(res.data.averageRating || 0); // Handle case when averageRating is not available
    } catch (error) {
      console.error(error.response?.data?.message || 'Error fetching rating');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = '12345'; // Replace with actual user ID from authentication
      await axios.post('http://localhost:5000/api/reviews', {
        movieId,
        userId,
        username,
        rating,
        reviewText,
      });

      setReviewText('');
      fetchReviews();
      fetchAverageRating();
    } catch (error) {
      console.error(error.response?.data?.message || 'Error submitting review');
    }
  };

  return (
    <div>
      <h2>Movie Reviews</h2>
      <p>Average Rating: {averageRating} ⭐</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}> {/* Convert string to number */}
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>
        <textarea
          placeholder="Write a review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id}>
              <p>
                <strong>{review.username}</strong> ({review.rating} ⭐)
              </p>
              <p>{review.reviewText}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewRating;
