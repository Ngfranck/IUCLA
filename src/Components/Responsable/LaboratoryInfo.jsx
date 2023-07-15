import React from 'react';

const LaboratoryInfo = ({ name, location, status }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full md:w-1/3 lg:w-1/3">
      <h2 className="text-lg font-medium mb-2">{name}</h2>
      <p className="text-gray-500 text-sm mb-2">{location}</p>
      <p className={`text-sm font-medium ${status === 'open' ? 'text-green-500' : 'text-red-500'}`}>
        {status === 'open' ? 'Ouvert' : 'Fermé'}
      </p>
    </div>
  );
};

export default LaboratoryInfo;
