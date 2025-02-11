// // import React, { useState } from 'react';
// // import emailjs from 'emailjs-com';

// // const ContactUs = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: '',
// //   });
// //   const [status, setStatus] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     emailjs
// //       .sendForm('service_djch2hi', 'template_y8ptv7c', e.target, '25Cl43Yt9RTzSXdil')
// //       .then((result) => {
// //         setStatus('Message Sent Successfully!');
// //         setFormData({
// //           name: '',
// //           email: '',
// //           message: '',
// //         });
// //       })
// //       .catch((error) => {
// //         setStatus('Error sending message, please try again.');
// //       });
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
// //         <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div>
// //             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               required
// //             />
// //           </div>
          
// //           <div>
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               required
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
// //               Message
// //             </label>
// //             <textarea
// //               id="message"
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               rows="4"
// //               required
// //             ></textarea>
// //           </div>

// //           <div className="mt-4">
// //             <button
// //               type="submit"
// //               className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             >
// //               Send Message
// //             </button>
// //           </div>
// //         </form>
        
// //         {status && (
// //           <div className={`mt-4 text-center ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
// //             {status}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ContactUs;


// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     from_name: '',  // Sender's name (from the form input)
//     email: '',
//     message: '',
//   });
//   const [status, setStatus] = useState('');

//   // Fixed recipient name (to_name) - adjust this to match your use case
//   const to_name = "MovieVerse Team"; // or you could use a dynamic value

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Sending form data with to_name, from_name, and message
//     emailjs
//       .sendForm('service_suvydbj', 'template_y8ptv7c', e.target, '25Cl43Yt9RTzSXdil')
//       .then((result) => {
//         setStatus('Message Sent Successfully!');
//         setFormData({
//           from_name: '',
//           email: '',
//           message: '',
//         });
//       })
//       .catch((error) => {
//         console.error('Email.js Error:', error.text);
//         setStatus('Error sending message, please try again.');
//       });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">
//               Your Name
//             </label>
//             <input
//               type="text"
//               id="from_name"
//               name="from_name"
//               value={formData.from_name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//               Your Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           <div className="mt-4">
//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Send Message
//             </button>
//           </div>
//         </form>

//         {status && (
//           <div className={`mt-4 text-center ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
//             {status}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


//css
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify'; // Importing toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

const ContactUs = () => {
  const [formData, setFormData] = useState({
    from_name: '',  // Sender's name (from the form input)
    email: '',
    message: '',
  });

  // Fixed recipient name (to_name) - adjust this to match your use case
  const to_name = "MovieVerse Team"; // or you could use a dynamic value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending form data with to_name, from_name, and message
    emailjs
      .sendForm('service_suvydbj', 'template_y8ptv7c', e.target, '25Cl43Yt9RTzSXdil')
      .then((result) => {
        toast.success('Message Sent Successfully!', { position: 'top-right' });
        setFormData({
          from_name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email.js Error:', error.text);
        toast.error('Error sending message, please try again.', { position: toast.POSITION.TOP_CENTER });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold text-cyan-800 text-center mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="from_name" className="block text-2xl mb-2 font-medium text-cyan-800">
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-2xl mb-2 font-medium text-cyan-800">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-2xl mb-2 font-medium text-cyan-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-cyan-800 text-2xl"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full scale-90 bg-green-800 text-3xl text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none hover:scale-100 transition-transform"
            >
              Send Message
            </button>
          </div>
        </form>

        <ToastContainer /> {/* This will render the toast notifications */}
      </div>
    </div>
  );
};

export default ContactUs;
