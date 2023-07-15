// LaboratoryInfo.jsx
import React from 'react';

const LaboratoryInfo = ({ name, location, status, filiere, responsables }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-medium mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Location:</span> {location}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Status:</span> {status}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-medium">Filière:</span> {filiere}
      </p>
      <h3 className="text-md font-medium mb-2">Responsables</h3>
      <ul className="list-disc ml-4">
        {responsables.map((resp, respIndex) => (
          <li key={respIndex}>
            {resp.firstName} {resp.lastName} ({resp.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LaboratoryInfo;
