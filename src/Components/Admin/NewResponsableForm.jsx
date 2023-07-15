// NewResponsableForm.jsx
import React, { useState } from 'react';

const NewResponsableForm = ({ addResponsable }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [filiere, setFiliere] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addResponsable({ firstName, lastName, email, filiere });
    setFirstName('');
    setLastName('');
    setEmail('');
    setFiliere('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg shadow-md p-4 mt-4">
      <h3 className="text-md font-medium mb-2">Ajouter un responsable</h3>
      <div className="flex flex-col mb-2">
        <label htmlFor="firstName" className="text-sm font-medium mb-1">
          Prénom :
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
          className="border-gray-300 border rounded-md py-2 px-3 text-sm"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="lastName" className="text-sm font-medium mb-1">
          Nom :
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
          className="border-gray-300 border rounded-md py-2 px-3 text-sm"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="email" className="text-sm font-medium mb-1">
          Email :
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="border-gray-300 border rounded-md py-2 px-3 text-sm"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="filiere" className="text-sm font-medium mb-1">
          Filière :
        </label>
        <input
          type="text"
          name="filiere"
          id="filiere"
          value={filiere}
          onChange={(event) => setFiliere(event.target.value)}
          required
          className="border-gray-300 border rounded-md py-2 px-3 text-sm"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600">
        Ajouter
      </button>
    </form>
  );
};

export default NewResponsableForm;
