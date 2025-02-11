// import React from 'react';

// const Card = ({ name, email }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-4 mb-4">
//       <h3 className="text-lg font-bold">{name}</h3>
      
//     </div>
//   );
// };

// export default Card;

//buttons
import React from 'react';

const Card = ({ title, subtitle, onView, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
      <div className="flex space-x-2 mt-4">
        <button
          onClick={onView}
          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
        >
          View
        </button>
        
        <button
          onClick={onDelete}
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
