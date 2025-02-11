// // // // // // import { useEffect, useState } from 'react';
// // // // // // import axios from 'axios';

// // // // // // const ReviewRating = ({ movieId }) => {
// // // // // //   const [reviews, setReviews] = useState([]);
// // // // // //   const [reviewText, setReviewText] = useState('');
// // // // // //   const [rating, setRating] = useState(5);
// // // // // //   const [username, setUsername] = useState('');
// // // // // //   const [averageRating, setAverageRating] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     fetchReviews();
// // // // // //     fetchAverageRating();
// // // // // //   }, []);

// // // // // //   const fetchReviews = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// // // // // //       setReviews(res.data);
// // // // // //     } catch (error) {
// // // // // //       console.error(error.response?.data?.message || 'Error fetching reviews');
// // // // // //     }
// // // // // //   };

// // // // // //   const fetchAverageRating = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// // // // // //       setAverageRating(res.data.averageRating);
// // // // // //     } catch (error) {
// // // // // //       console.error(error.response?.data?.message || 'Error fetching rating');
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       const userId = '12345'; // Replace with actual user ID from authentication
// // // // // //       await axios.post('http://localhost:5000/api/reviews', {
// // // // // //         movieId,
// // // // // //         userId,
// // // // // //         username,
// // // // // //         rating,
// // // // // //         reviewText,
// // // // // //       });

// // // // // //       setReviewText('');
// // // // // //       fetchReviews();
// // // // // //       fetchAverageRating();
// // // // // //     } catch (error) {
// // // // // //       console.error(error.response?.data?.message || 'Error submitting review');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Movie Reviews</h2>
// // // // // //       <p>Average Rating: {averageRating} ⭐</p>

// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           placeholder="Your Name"
// // // // // //           value={username}
// // // // // //           onChange={(e) => setUsername(e.target.value)}
// // // // // //           required
// // // // // //         />
// // // // // //         <select value={rating} onChange={(e) => setRating(e.target.value)}>
// // // // // //           {[1, 2, 3, 4, 5].map((num) => (
// // // // // //             <option key={num} value={num}>
// // // // // //               {num} ⭐
// // // // // //             </option>
// // // // // //           ))}
// // // // // //         </select>
// // // // // //         <textarea
// // // // // //           placeholder="Write a review..."
// // // // // //           value={reviewText}
// // // // // //           onChange={(e) => setReviewText(e.target.value)}
// // // // // //           required
// // // // // //         ></textarea>
// // // // // //         <button type="submit">Submit</button>
// // // // // //       </form>

// // // // // //       <div>
// // // // // //         <h3>Reviews:</h3>
// // // // // //         {reviews.length === 0 ? (
// // // // // //           <p>No reviews yet.</p>
// // // // // //         ) : (
// // // // // //           reviews.map((review) => (
// // // // // //             <div key={review._id}>
// // // // // //               <p>
// // // // // //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// // // // // //               </p>
// // // // // //               <p>{review.reviewText}</p>
// // // // // //             </div>
// // // // // //           ))
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default ReviewRating;


// // // // // import { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useParams } from 'react-router-dom'; // Import useParams to get params from the route

// // // // // const ReviewRating = () => {
// // // // //   const { movieId } = useParams(); // Get movieId from the URL params
// // // // //   const [reviews, setReviews] = useState([]);
// // // // //   const [reviewText, setReviewText] = useState('');
// // // // //   const [rating, setRating] = useState(5);
// // // // //   const [username, setUsername] = useState('');
// // // // //   const [averageRating, setAverageRating] = useState(0);

// // // // //   useEffect(() => {
// // // // //     fetchReviews();
// // // // //     fetchAverageRating();
// // // // //   }, [movieId]);

// // // // //   const fetchReviews = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// // // // //       setReviews(res.data);
// // // // //     } catch (error) {
// // // // //       console.error(error.response?.data?.message || 'Error fetching reviews');
// // // // //     }
// // // // //   };

// // // // //   const fetchAverageRating = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// // // // //       setAverageRating(res.data.averageRating);
// // // // //     } catch (error) {
// // // // //       console.error(error.response?.data?.message || 'Error fetching rating');
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const userId = '12345'; // Replace with actual user ID from authentication
// // // // //       await axios.post('http://localhost:5000/api/reviews', {
// // // // //         movieId,
// // // // //         userId,
// // // // //         username,
// // // // //         rating,
// // // // //         reviewText,
// // // // //       });

// // // // //       setReviewText('');
// // // // //       fetchReviews();
// // // // //       fetchAverageRating();
// // // // //     } catch (error) {
// // // // //       console.error(error.response?.data?.message || 'Error submitting review');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Movie Reviews</h2>
// // // // //       <p>Average Rating: {averageRating} ⭐</p>

// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Your Name"
// // // // //           value={username}
// // // // //           onChange={(e) => setUsername(e.target.value)}
// // // // //           required
// // // // //         />
// // // // //         <select value={rating} onChange={(e) => setRating(e.target.value)}>
// // // // //           {[1, 2, 3, 4, 5].map((num) => (
// // // // //             <option key={num} value={num}>
// // // // //               {num} ⭐
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //         <textarea
// // // // //           placeholder="Write a review..."
// // // // //           value={reviewText}
// // // // //           onChange={(e) => setReviewText(e.target.value)}
// // // // //           required
// // // // //         ></textarea>
// // // // //         <button type="submit">Submit</button>
// // // // //       </form>

// // // // //       <div>
// // // // //         <h3>Reviews:</h3>
// // // // //         {reviews.length === 0 ? (
// // // // //           <p>No reviews yet.</p>
// // // // //         ) : (
// // // // //           reviews.map((review) => (
// // // // //             <div key={review._id}>
// // // // //               <p>
// // // // //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// // // // //               </p>
// // // // //               <p>{review.reviewText}</p>
// // // // //             </div>
// // // // //           ))
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ReviewRating;


// // // // // import { useEffect, useState } from 'react';
// // // // // import axios from 'axios';
// // // // // import { useParams } from 'react-router-dom'; // Import useParams to get params from the route

// // // // // const ReviewRating = () => {
// // // // //   const { movieId } = useParams(); // Get movieId from the URL params
// // // // //   const [reviews, setReviews] = useState([]);
// // // // //   const [reviewText, setReviewText] = useState('');
// // // // //   const [rating, setRating] = useState(5);
// // // // //   const [username, setUsername] = useState('');
// // // // //   const [averageRating, setAverageRating] = useState(0);

// // // // //   useEffect(() => {
// // // // //     fetchReviews();
// // // // //     fetchAverageRating();
// // // // //   }, [movieId]);

// // // // //   const fetchReviews = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// // // // //       setReviews(res.data);
// // // // //     } catch (error) {
// // // // //       console.error(error.response?.data?.message || 'Error fetching reviews');
// // // // //     }
// // // // //   };

// // // // //   const fetchAverageRating = async () => {
// // // // //     try {
// // // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// // // // //       setAverageRating(res.data.averageRating || 0); // Handle case when averageRating is not available
// // // // //     } catch (error) {
// // // // //       console.error(error.response?.data?.message || 'Error fetching rating');
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const userId = '12345'; // Replace with actual user ID from authentication
// // // // //       await axios.post('http://localhost:5000/api/reviews', {
// // // // //         movieId,
// // // // //         userId,
// // // // //         username,
// // // // //         rating,
// // // // //         reviewText,
// // // // //       });

// // // // //       setReviewText('');
// // // // //       fetchReviews();
// // // // //       fetchAverageRating();
// // // // //     } catch (error) {
// // // // //       console.error(error.response?.data?.message || 'Error submitting review');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Movie Reviews</h2>
// // // // //       <p>Average Rating: {averageRating} ⭐</p>

// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Your Name"
// // // // //           value={username}
// // // // //           onChange={(e) => setUsername(e.target.value)}
// // // // //           required
// // // // //         />
// // // // //         <select value={rating} onChange={(e) => setRating(Number(e.target.value))}> {/* Convert string to number */}
// // // // //           {[1, 2, 3, 4, 5].map((num) => (
// // // // //             <option key={num} value={num}>
// // // // //               {num} ⭐
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //         <textarea
// // // // //           placeholder="Write a review..."
// // // // //           value={reviewText}
// // // // //           onChange={(e) => setReviewText(e.target.value)}
// // // // //           required
// // // // //         ></textarea>
// // // // //         <button type="submit">Submit</button>
// // // // //       </form>

// // // // //       <div>
// // // // //         <h3>Reviews:</h3>
// // // // //         {reviews.length === 0 ? (
// // // // //           <p>No reviews yet.</p>
// // // // //         ) : (
// // // // //           reviews.map((review) => (
// // // // //             <div key={review._id}>
// // // // //               <p>
// // // // //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// // // // //               </p>
// // // // //               <p>{review.reviewText}</p>
// // // // //             </div>
// // // // //           ))
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ReviewRating;

// // // // //css
// // // // import { useEffect, useState } from 'react';
// // // // import axios from 'axios';
// // // // import { useParams } from 'react-router-dom'; // Import useParams to get params from the route

// // // // const ReviewRating = () => {
// // // //   const { movieId } = useParams(); // Get movieId from the URL params
// // // //   const [reviews, setReviews] = useState([]);
// // // //   const [reviewText, setReviewText] = useState('');
// // // //   const [rating, setRating] = useState(5);
// // // //   const [username, setUsername] = useState('');
// // // //   const [averageRating, setAverageRating] = useState(0);

// // // //   useEffect(() => {
// // // //     fetchReviews();
// // // //     fetchAverageRating();
// // // //   }, [movieId]);

// // // //   const fetchReviews = async () => {
// // // //     try {
// // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// // // //       setReviews(res.data);
// // // //     } catch (error) {
// // // //       console.error(error.response?.data?.message || 'Error fetching reviews');
// // // //     }
// // // //   };

// // // //   const fetchAverageRating = async () => {
// // // //     try {
// // // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// // // //       setAverageRating(res.data.averageRating || 0); // Handle case when averageRating is not available
// // // //     } catch (error) {
// // // //       console.error(error.response?.data?.message || 'Error fetching rating');
// // // //     }
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //     //   const userId = '12345'; // Replace with actual user ID from authentication
// // // //       await axios.post('http://localhost:5000/api/reviews', {
// // // //         movieId,
// // // //         // userId,
// // // //         username,
// // // //         rating,
// // // //         reviewText,
// // // //       });

// // // //       setReviewText('');
// // // //       fetchReviews();
// // // //       fetchAverageRating();
// // // //     } catch (error) {
// // // //       console.error(error.response?.data?.message || 'Error submitting review');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="container mx-auto px-4 py-8">
// // // //       <h2 className="text-3xl font-bold text-center text-cyan-800 mb-4">Movie Reviews</h2>
// // // //       <p className="text-center text-xl text-cyan-800 mb-6">Average Rating: {averageRating} ⭐</p>

// // // //       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Your Name"
// // // //           value={username}
// // // //           onChange={(e) => setUsername(e.target.value)}
// // // //           required
// // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // // //         />
// // // //         <select
// // // //           value={rating}
// // // //           onChange={(e) => setRating(Number(e.target.value))}
// // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // // //         >
// // // //           {[1, 2, 3, 4, 5].map((num) => (
// // // //             <option key={num} value={num}>
// // // //               {num} ⭐
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //         <textarea
// // // //           placeholder="Write a review..."
// // // //           value={reviewText}
// // // //           onChange={(e) => setReviewText(e.target.value)}
// // // //           required
// // // //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // // //         ></textarea>
// // // //         <button
// // // //           type="submit"
// // // //           className="w-full py-3 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
// // // //         >
// // // //           Submit
// // // //         </button>
// // // //       </form>

// // // //       <div className="mt-8">
// // // //         <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Reviews:</h3>
// // // //         {reviews.length === 0 ? (
// // // //           <p>No reviews yet.</p>
// // // //         ) : (
// // // //           reviews.map((review) => (
// // // //             <div key={review._id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
// // // //               <p className="text-lg font-semibold text-cyan-800">
// // // //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// // // //               </p>
// // // //               <p className="text-gray-700 mt-2">{review.reviewText}</p>
// // // //             </div>
// // // //           ))
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ReviewRating;



// // // //err
// // // import { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { useParams } from 'react-router-dom'; // Import useParams to get params from the route

// // // const ReviewRating = () => {
// // //   const { movieId } = useParams(); // Get movieId from the URL params
// // //   const [reviews, setReviews] = useState([]);
// // //   const [reviewText, setReviewText] = useState('');
// // //   const [rating, setRating] = useState(5);
// // //   const [username, setUsername] = useState(''); // You may want to fetch this from the authenticated user's data
// // //   const [averageRating, setAverageRating] = useState(0);

// // //   useEffect(() => {
// // //     fetchReviews();
// // //     fetchAverageRating();
// // //   }, [movieId]);

// // //   const fetchReviews = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// // //       setReviews(res.data);
// // //     } catch (error) {
// // //       console.error(error.response?.data?.message || 'Error fetching reviews');
// // //     }
// // //   };

// // //   const fetchAverageRating = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// // //       setAverageRating(res.data.averageRating || 0); // Handle case when averageRating is not available
// // //     } catch (error) {
// // //       console.error(error.response?.data?.message || 'Error fetching rating');
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       if (!username) {
// // //         // Handle case where username is not provided
// // //         console.error("Username is required");
// // //         return;
// // //       }

// // //       await axios.post('http://localhost:5000/api/reviews', {
// // //         movieId,
// // //         username,
// // //         rating,
// // //         reviewText,
// // //       });

// // //       setReviewText('');
// // //       fetchReviews();
// // //       fetchAverageRating();
// // //     } catch (error) {
// // //       console.error(error.response?.data?.message || 'Error submitting review');
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto px-4 py-8">
// // //       <h2 className="text-3xl font-bold text-center text-cyan-800 mb-4">Movie Reviews</h2>
// // //       <p className="text-center text-xl text-cyan-800 mb-6">Average Rating: {averageRating} ⭐</p>

// // //       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
// // //         <input
// // //           type="text"
// // //           placeholder="Your Name"
// // //           value={username}
// // //           onChange={(e) => setUsername(e.target.value)}
// // //           required
// // //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // //         />
// // //         <select
// // //           value={rating}
// // //           onChange={(e) => setRating(Number(e.target.value))}
// // //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // //         >
// // //           {[1, 2, 3, 4, 5].map((num) => (
// // //             <option key={num} value={num}>
// // //               {num} ⭐
// // //             </option>
// // //           ))}
// // //         </select>
// // //         <textarea
// // //           placeholder="Write a review..."
// // //           value={reviewText}
// // //           onChange={(e) => setReviewText(e.target.value)}
// // //           required
// // //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // //         ></textarea>
// // //         <button
// // //           type="submit"
// // //           className="w-full py-3 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
// // //         >
// // //           Submit
// // //         </button>
// // //       </form>

// // //       <div className="mt-8">
// // //         <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Reviews:</h3>
// // //         {reviews.length === 0 ? (
// // //           <p>No reviews yet.</p>
// // //         ) : (
// // //           reviews.map((review) => (
// // //             <div key={review._id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
// // //               <p className="text-lg font-semibold text-cyan-800">
// // //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// // //               </p>
// // //               <p className="text-gray-700 mt-2">{review.reviewText}</p>
// // //             </div>
// // //           ))
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ReviewRating;


// // //username
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // const ReviewRating = () => {
// //   const { movieId } = useParams();
// //   const [reviews, setReviews] = useState([]);
// //   const [reviewText, setReviewText] = useState('');
// //   const [rating, setRating] = useState(5);
// //   const [username, setUsername] = useState('');
// //   const [averageRating, setAverageRating] = useState(0);

// //   useEffect(() => {
// //     fetchReviews();
// //     fetchAverageRating();
// //     fetchUserInfo(); // Fetch user info based on email stored in localStorage
// //   }, [movieId]);

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
// //       setAverageRating(res.data.averageRating || 0);
// //     } catch (error) {
// //       console.error(error.response?.data?.message || 'Error fetching rating');
// //     }
// //   };

// //   const fetchUserInfo = async () => {
// //     try {
// //       const email = localStorage.getItem('email'); // Retrieve the email from localStorage
// //       if (email) {
// //         const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
// //         setUsername(res.data.username); // Set username based on the fetched user data
// //       }
// //     } catch (error) {
// //       console.error('Error fetching user info:', error.response?.data?.message || 'Error');
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!username) {
// //         console.error('Username is required');
// //         return;
// //       }

// //       await axios.post('http://localhost:5000/api/reviews', {
// //         movieId,
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
// //     <div className="container mx-auto px-4 py-8">
// //       <h2 className="text-3xl font-bold text-center text-cyan-800 mb-4">Movie Reviews</h2>
// //       <p className="text-center text-xl text-cyan-800 mb-6">Average Rating: {averageRating} ⭐</p>

// //       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
// //         <input
// //           type="text"
// //           value={username}
// //           readOnly
// //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// //         />
        
// //         <select
// //           value={rating}
// //           onChange={(e) => setRating(Number(e.target.value))}
// //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// //         >
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
// //           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// //         ></textarea>

// //         <button
// //           type="submit"
// //           className="w-full py-3 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
// //         >
// //           Submit
// //         </button>
// //       </form>

// //       <div className="mt-8">
// //         <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Reviews:</h3>
// //         {reviews.length === 0 ? (
// //           <p>No reviews yet.</p>
// //         ) : (
// //           reviews.map((review) => (
// //             <div key={review._id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
// //               <p className="text-lg font-semibold text-cyan-800">
// //                 <strong>{review.username}</strong> ({review.rating} ⭐)
// //               </p>
// //               <p className="text-gray-700 mt-2">{review.reviewText}</p>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReviewRating;



// //del-rr
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ReviewRating = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [reviewText, setReviewText] = useState('');
//   const [rating, setRating] = useState(5);
//   const [username, setUsername] = useState('');
//   const [averageRating, setAverageRating] = useState(0);

//   useEffect(() => {
//     fetchReviews();
//     fetchAverageRating();
//     fetchUserInfo(); // Fetch user info based on email stored in localStorage
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
//       setAverageRating(res.data.averageRating || 0);
//     } catch (error) {
//       console.error(error.response?.data?.message || 'Error fetching rating');
//     }
//   };

//   const fetchUserInfo = async () => {
//     try {
//       const email = localStorage.getItem('email'); // Retrieve the email from localStorage
//       if (email) {
//         const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
//         setUsername(res.data.username); // Set username based on the fetched user data
//       }
//     } catch (error) {
//       console.error('Error fetching user info:', error.response?.data?.message || 'Error');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!username) {
//         console.error('Username is required');
//         return;
//       }

//       await axios.post('http://localhost:5000/api/reviews', {
//         movieId,
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

//   const handleDelete = async (reviewId) => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.delete(`http://localhost:5000/api/reviews/${reviewId}`, {
//         headers: {
//           'x-token': token,  // Include the token here
//         },
//         data: {
//           username,  // Include the username to match the review
//         },
//       });

//       fetchReviews();  // Refresh the reviews after deleting one
//     } catch (error) {
//       console.error('Error deleting review:', error.response?.data?.message || 'Error');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold text-center text-cyan-800 mb-4">Movie Reviews</h2>
//       <p className="text-center text-xl text-cyan-800 mb-6">Average Rating: {averageRating} ⭐</p>

//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
//         <input
//           type="text"
//           value={username}
//           readOnly
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
//         />
        
//         <select
//           value={rating}
//           onChange={(e) => setRating(Number(e.target.value))}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
//         >
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
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full py-3 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
//         >
//           Submit
//         </button>
//       </form>

//       <div className="mt-8">
//         <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Reviews:</h3>
//         {reviews.length === 0 ? (
//           <p>No reviews yet.</p>
//         ) : (
//           reviews.map((review) => (
//             <div key={review._id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
//               <p className="text-lg font-semibold text-cyan-800">
//                 <strong>{review.username}</strong> ({review.rating} ⭐)
//               </p>
//               <p className="text-gray-700 mt-2">{review.reviewText}</p>

//               {/* Show delete button only if the review belongs to the logged-in user */}
//               {review.username === username && (
//                 <button
//                   onClick={() => handleDelete(review._id)}
//                   className="mt-4 text-red-600 hover:text-red-800"
//                 >
//                   Delete Review
//                 </button>
//               )}
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
import { useParams } from 'react-router-dom';

const ReviewRating = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [username, setUsername] = useState('');
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
    fetchAverageRating();
    fetchUserInfo(); // Fetch user info based on email stored in localStorage
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
      setAverageRating(res.data.averageRating || 0);
    } catch (error) {
      console.error(error.response?.data?.message || 'Error fetching rating');
    }
  };

  const fetchUserInfo = async () => {
    try {
      const email = localStorage.getItem('email'); // Retrieve the email from localStorage
      if (email) {
        const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
        setUsername(res.data.username); // Set username based on the fetched user data
      }
    } catch (error) {
      console.error('Error fetching user info:', error.response?.data?.message || 'Error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        console.error('Username is required');
        return;
      }

      await axios.post('http://localhost:5000/api/reviews', {
        movieId,
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

  const handleDelete = async (reviewId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(`http://localhost:5000/api/reviews/${reviewId}`, {
        headers: {
          'x-token': token,  // Include the token here
        },
      });

      fetchReviews();  // Refresh the reviews after deleting one
    } catch (error) {
      console.error('Error deleting review:', error.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-cyan-800 mb-4">Movie Reviews</h2>
      <p className="text-center text-xl text-cyan-800 mb-6">Average Rating: {averageRating} ⭐</p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          value={username}
          readOnly
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
        />
        
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
        >
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
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-cyan-800 mb-4">Reviews:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-cyan-800">
                <strong>{review.username}</strong> ({review.rating} ⭐)
              </p>
              <p className="text-gray-700 mt-2">{review.reviewText}</p>

              {/* Show delete button only if the review belongs to the logged-in user */}
              {review.username === username && (
                <button
                  onClick={() => handleDelete(review._id)}
                  className="mt-4 text-red-600 hover:text-red-800"
                >
                  Delete Review
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewRating;
