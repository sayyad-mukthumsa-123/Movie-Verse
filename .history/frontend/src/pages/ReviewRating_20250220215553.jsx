// // // import { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { useParams } from 'react-router-dom';
// // // import { toast, ToastContainer } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // const ReviewRating = () => {
// // //   const { movieId } = useParams();
// // //   const [reviews, setReviews] = useState([]);
// // //   const [reviewText, setReviewText] = useState('');
// // //   const [rating, setRating] = useState(5);
// // //   const [username, setUsername] = useState('');
// // //   const [averageRating, setAverageRating] = useState(0);
// // //   const [confirmDelete, setConfirmDelete] = useState(null);
// // //   const [inputUsername, setInputUsername] = useState('');

// // //   useEffect(() => {
// // //     fetchReviews();
// // //     fetchAverageRating();
// // //     fetchUserInfo();
// // //   }, [movieId]);

// // //   const fetchReviews = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// // //       setReviews(res.data); // If no reviews, empty array will be returned
// // //     } catch (error) {
// // //       toast.error(error.response?.data?.message || 'Error fetching reviews');
// // //     }
// // //   };

// // //   const fetchAverageRating = async () => {
// // //     try {
// // //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// // //       setAverageRating(res.data.averageRating || 0);
// // //     } catch (error) {
// // //       toast.error(error.response?.data?.message || 'Error fetching rating');
// // //     }
// // //   };

// // //   const fetchUserInfo = async () => {
// // //     try {
// // //       const email = localStorage.getItem('email');
// // //       if (email) {
// // //         const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
// // //         setUsername(res.data.username);
// // //       }
// // //     } catch (error) {
// // //       toast.error('Error fetching user info');
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       if (!username) {
// // //         toast.error('Username is required');
// // //         return;
// // //       }

// // //       await axios.post('http://localhost:5000/api/reviews', {
// // //         movieId,
// // //         username,
// // //         rating,
// // //         reviewText,
// // //       });

// // //       setReviewText('');
// // //       toast.success('Review submitted successfully!'); // Show success message after submitting
// // //       fetchReviews();
// // //       fetchAverageRating();
// // //     } catch (error) {
// // //       toast.error(error.response?.data?.message || 'Error submitting review');
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     if (!confirmDelete) return;

// // //     const { reviewId, reviewUsername } = confirmDelete;
// // //     const token = localStorage.getItem('token');

// // //     if (inputUsername !== username) {
// // //       toast.error('Username does not match. Deletion failed!');
// // //       return;
// // //     }

// // //     try {
// // //       await axios.delete(`http://localhost:5000/api/reviews/${reviewId}`, {
// // //         headers: {
// // //           'x-token': token,
// // //         },
// // //         data: {
// // //           username: reviewUsername,
// // //         },
// // //       });

// // //       setReviews(reviews.filter((review) => review._id !== reviewId));
// // //       fetchAverageRating();
// // //       toast.success('Review deleted successfully!');
// // //       setConfirmDelete(null);
// // //       setInputUsername('');
// // //     } catch (error) {
// // //       toast.error(error.response?.data?.message || 'Error deleting review');
// // //     }
// // //   };

// // //   return (
// // //     <div className="container mx-auto px-4 py-8 bg-slate-900 text-slate-50 min-h-screen">
// // //       <h2 className="text-3xl font-bold text-center text-slate-50 mb-4">Movie Reviews</h2>
// // //       <p className="text-center text-xl text-slate-50 mb-6">Average Rating : {averageRating} ⭐</p>

// // //       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 outline rounded-lg p-3">
// // //         <h1 className='text-2xl text-center font-semibold m-2'>Add A Review</h1>
// // //         <input
// // //           type="text"
// // //           value={username}
// // //           readOnly
// // //           className="w-full p-3 border text-slate-900 text-xl rounded-lg "
// // //         />

// // //         <select
// // //           value={rating}
// // //           onChange={(e) => setRating(Number(e.target.value))}
// // //           className="w-full p-3 text-xl rounded-lg text-slate-900"
// // //         >
// // //           {[1, 2, 3, 4, 5].map((num) => (
// // //             <option key={num} value={num} >
// // //               {num} ⭐
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <textarea
// // //           placeholder="Write a review..."
// // //           value={reviewText}
// // //           onChange={(e) => setReviewText(e.target.value)}
// // //           required
// // //           className="w-full p-3  rounded-lg text-xl text-slate-900"
// // //         ></textarea>

// // //         <button
// // //           type="submit"
// // //           className="w-full text-2xl py-3 text-cyan-700 bg-slate-50 font-bold rounded-lg hover:bg-cyan-700 hover:text-slate-50 transition-all"
// // //         >
// // //           Submit
// // //         </button>
// // //       </form>

// // //       <div className="mt-8">
// // //         {/* <h3 className="text-2xl font-semibold text-slate-50 mb-4">Reviews:</h3> */}
// // //         <h2 className="text-3xl font-bold text-center mt-20 text-cyan-700 bg-slate-50 p-3 mb-3 rounded-lg">Reviews</h2>
// // //         <div className='outline rounded-lg p-3'>
// // //           {reviews.length === 0 ? (
// // //             <p className="text-center text-xl text-slate-50">No reviews yet.</p>
// // //           ) : (
// // //             <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
// // //               {reviews.map((review) => (
// // //                 <div
// // //                   key={review._id}
// // //                   className="p-4 bg-slate-50 rounded-lg shadow-md hover:shadow-lg hover:shadow-slate-50 transition-all flex flex-col"
// // //                 >
// // //                   <div className="flex flex-col w-full mb-2">
// // //                     <p className="text-2xl font-semibold text-cyan-700">
// // //                       <strong>{review.username}</strong>
// // //                     </p>

// // //                     {/* Line separator */}
// // //                     <div className="border-b-2 border-slate-500 my-2"></div>

// // //                     <div className="flex justify-between items-center mt-2">
// // //                       <div className="flex flex-col w-full">
// // //                         <p className="text-slate-700 font-bold text-xl">{review.rating} ⭐</p>
// // //                         <p className="text-slate-700 text-xl mt-2">{review.reviewText}</p>
// // //                       </div>

// // //                       {/* Button aligned beside content */}
// // //                       {review.username === username && (
// // //                         <div className="flex items-center justify-center ml-4">
// // //                           <button
// // //                             onClick={() => setConfirmDelete({ reviewId: review._id, reviewUsername: review.username })}
// // //                             className="py-2 px-4 text-red-600 text-xl outline bg-slate-50 font-bold rounded-lg hover:bg-red-700  hover:text-slate-50 transition-all hover:scale-105"
// // //                           >
// // //                             Delete
// // //                           </button>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {confirmDelete && (
// // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
// // //           <div className="bg-white p-6 rounded-lg shadow-lg">
// // //             <h3 className="text-lg font-bold text-gray-800 mb-4">Confirm Delete</h3>
// // //             <p className="text-gray-600 mb-4">Enter your username to confirm deletion:</p>

// // //             <input
// // //               type="text"
// // //               value={inputUsername}
// // //               onChange={(e) => setInputUsername(e.target.value)}
// // //               placeholder="Type your username"
// // //               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-800"
// // //             />

// // //             <div className="mt-6 flex justify-end space-x-4">
// // //               <button
// // //                 onClick={() => setConfirmDelete(null)}
// // //                 className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-colors"
// // //               >
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleDelete}
// // //                 className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* ToastContainer for notifications */}
// // //       <ToastContainer />
// // //     </div>
// // //   );
// // // };

// // // export default ReviewRating;



// // //2
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const ReviewRating = () => {
// //   const { movieId } = useParams();
// //   const [reviews, setReviews] = useState([]);
// //   const [reviewText, setReviewText] = useState('');
// //   const [rating, setRating] = useState(5);
// //   const [username, setUsername] = useState('');
// //   const [averageRating, setAverageRating] = useState(0);
// //   const [confirmDelete, setConfirmDelete] = useState(null);
// //   const [inputUsername, setInputUsername] = useState('');

// //   useEffect(() => {
// //     fetchReviews();
// //     fetchAverageRating();
// //     fetchUserInfo();
// //   }, [movieId]);

// //   const fetchReviews = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
// //       setReviews(res.data);
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Error fetching reviews');
// //     }
// //   };

// //   const fetchAverageRating = async () => {
// //     try {
// //       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
// //       setAverageRating(res.data.averageRating || 0);
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Error fetching rating');
// //     }
// //   };

// //   const fetchUserInfo = async () => {
// //     try {
// //       const email = localStorage.getItem('email');
// //       if (email) {
// //         const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
// //         setUsername(res.data.username);
// //       }
// //     } catch (error) {
// //       toast.error('Error fetching user info');
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!username) {
// //         toast.error('Username is required');
// //         return;
// //       }

// //       await axios.post('http://localhost:5000/api/reviews', {
// //         movieId,
// //         username,
// //         rating,
// //         reviewText,
// //       });

// //       setReviewText('');
// //       toast.success('Review submitted successfully!');
// //       fetchReviews();
// //       fetchAverageRating();
// //     } catch (error) {
// //       toast.error(error.response?.data?.message || 'Error submitting review');
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8 bg-slate-900 text-slate-50 min-h-screen">
// //       <h2 className="text-3xl font-bold text-center text-slate-50 mb-4">Movie Reviews</h2>
// //       <p className="text-center text-xl text-slate-50 mb-6">Average Rating : {averageRating} ⭐</p>

// //       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 outline rounded-lg p-3">
// //         <h1 className='text-2xl text-center font-semibold m-2'>Add A Review</h1>
// //         <input
// //           type="text"
// //           value={username}
// //           readOnly
// //           title="Username is read-only"
// //           className="w-full p-3 border text-slate-900 text-xl rounded-lg cursor-not-allowed"
// //         />

// //         <select
// //           value={rating}
// //           onChange={(e) => setRating(Number(e.target.value))}
// //           className="w-full p-3 text-xl rounded-lg text-slate-900"
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
// //           className="w-full p-3 rounded-lg text-xl text-slate-900"
// //         ></textarea>

// //         <button
// //           type="submit"
// //           className="w-full text-2xl py-3 text-cyan-700 bg-slate-50 font-bold rounded-lg hover:bg-cyan-700 hover:text-slate-50 transition-all"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //       <ToastContainer />
// //     </div>
// //   );
// // };

// // export default ReviewRating;


// //3
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

// const ReviewRating = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [reviewText, setReviewText] = useState('');
//   const [rating, setRating] = useState(5);
//   const [username, setUsername] = useState('');
//   const [averageRating, setAverageRating] = useState(0);
//   const [confirmDelete, setConfirmDelete] = useState(null);
//   const [inputUsername, setInputUsername] = useState('');

//   useEffect(() => {
//     fetchReviews();
//     fetchAverageRating();
//     fetchUserInfo();
//   }, [movieId]);

//   const fetchReviews = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
//       setReviews(res.data);
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error fetching reviews');
//     }
//   };

//   const fetchAverageRating = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
//       setAverageRating(res.data.averageRating || 0);
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error fetching rating');
//     }
//   };

//   const fetchUserInfo = async () => {
//     try {
//       const email = localStorage.getItem('email');
//       if (email) {
//         const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
//         setUsername(res.data.username);
//       }
//     } catch (error) {
//       toast.error('Error fetching user info');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (!username) {
//         toast.error('Username is required');
//         return;
//       }
//       await axios.post('http://localhost:5000/api/reviews', { movieId, username, rating, reviewText });
//       setReviewText('');
//       toast.success('Review submitted successfully!');
//       fetchReviews();
//       fetchAverageRating();
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error submitting review');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 bg-slate-900 text-slate-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-center mb-4">Movie Reviews</h2>
//       <p className="text-center text-xl mb-6">Average Rating: {averageRating} ⭐</p>
      
//       <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 outline rounded-lg p-3">
//         <h1 className='text-2xl text-center font-semibold m-2'>Add A Review</h1>
//         <Tippy content="Username is read-only">
//           <input
//             type="text"
//             value={username}
//             readOnly
//             className="w-full p-3 border text-slate-900 text-xl rounded-lg cursor-not-allowed focus:ring-2 focus:ring-cyan-700"
//           />
//         </Tippy>
        
//         <select
//           value={rating}
//           onChange={(e) => setRating(Number(e.target.value))}
//           className="w-full p-3 text-xl rounded-lg text-slate-900"
//         >
//           {[1, 2, 3, 4, 5].map((num) => (
//             <option key={num} value={num}>{num} ⭐</option>
//           ))}
//         </select>

//         <textarea
//           placeholder="Write a review..."
//           value={reviewText}
//           onChange={(e) => setReviewText(e.target.value)}
//           required
//           className="w-full p-3 rounded-lg text-xl text-slate-900"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full text-2xl py-3 text-cyan-700 bg-slate-50 font-bold rounded-lg hover:bg-cyan-700 hover:text-slate-50 transition-all"
//         >
//           Submit
//         </button>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default ReviewRating;



//4
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css'; // Importing a light theme

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
    fetchUserInfo();
  }, [movieId]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}`);
      setReviews(res.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error fetching reviews');
    }
  };

  const fetchAverageRating = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/reviews/${movieId}/average-rating`);
      setAverageRating(res.data.averageRating || 0);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error fetching rating');
    }
  };

  const fetchUserInfo = async () => {
    try {
      const email = localStorage.getItem('email');
      if (email) {
        const res = await axios.get(`http://localhost:5000/api/profile/${email}`);
        setUsername(res.data.username);
      }
    } catch (error) {
      toast.error('Error fetching user info');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username) {
        toast.error('Username is required');
        return;
      }
      await axios.post('http://localhost:5000/api/reviews', { movieId, username, rating, reviewText });
      setReviewText('');
      toast.success('Review submitted successfully!');
      fetchReviews();
      fetchAverageRating();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error submitting review');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-900 text-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-4">Movie Reviews</h2>
      <p className="text-center text-xl mb-6">Average Rating: {averageRating} ⭐</p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 outline rounded-lg p-3">
        <h1 className='text-2xl text-center font-semibold m-2'>Add A Review</h1>
        
        {/* Tooltip on Username Input */}
        <Tippy content={<span className="text-red-600 text-2xl">Username is read-only</span>} theme="light">
          <input
            type="text"
            value={username}
            readOnly
            className="w-full p-3 border text-slate-900 text-xl rounded-lg cursor-not-allowed focus:ring-2 focus:ring-cyan-700"
          />
        </Tippy>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-3 text-xl rounded-lg text-slate-900"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num} ⭐</option>
          ))}
        </select>

        <textarea
          placeholder="Write a review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
          className="w-full p-3 rounded-lg text-xl text-slate-900"
        ></textarea>

        <button
          type="submit"
          className="w-full text-2xl py-3 text-cyan-700 bg-slate-50 font-bold rounded-lg hover:bg-cyan-700 hover:text-slate-50 transition-all"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ReviewRating;
