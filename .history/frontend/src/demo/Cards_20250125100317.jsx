import React from 'react';

const Card = ({ title, subtitle }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      
    </div>
  );
};

export default Card;
