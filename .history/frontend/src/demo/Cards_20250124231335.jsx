import React from 'react';

const Card = ({ name, email }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default Card;
