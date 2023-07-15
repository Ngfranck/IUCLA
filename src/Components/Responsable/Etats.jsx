import React, { useState } from 'react';
import LaboratoryInfo from './LaboratoryInfo';

const Etats = () => {
  const [laboratories, setLaboratories] = useState([
    {
      name: 'Laboratoire A',
      location: 'Paris',
      status: 'open',
    },
    {
      name: 'Laboratoire B',
      location: 'Lyon',
      status: 'closed',
    },
    {
      name: 'Laboratoire C',
      location: 'Marseille',
      status: 'open',
    },
  ]);

  const [newLab, setNewLab] = useState({
    name: '',
    location: '',
    status: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewLab((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLaboratories((prevState) => [...prevState, newLab]);
    setNewLab({
      name: '',
      location: '',
      status: '',
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        {laboratories.map((lab, index) => (
          <div key={index} className="p-2">
            <LaboratoryInfo {...lab} />
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="mt-4">
        <h3 className="text-lg font-medium mb-2">Ajouter un nouveau laboratoire</h3>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mb-2 md:mr-2">
            <label htmlFor="name" className="text-sm font-medium mb-1">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={newLab.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col mb-2 md:mr-2">
            <label htmlFor="location" className="text-sm font-medium mb-1">
              Localisation
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={newLab.location}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md text-sm"
            />
          </div>
          <div className="flex flex-col mb-2 md:mr-2">
            <label htmlFor="status" className="text-sm font-medium mb-1">
              État
            </label>
            <select
              name="status"
              id="status"
              value={newLab.status}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded-md text-sm"
            >
              <option value="">Sélectionner un état</option>
              <option value="open">Ouvert</option>
              <option value="closed">Fermé</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={!newLab.name || !newLab.location || !newLab.status}
            className={`bg-blue-500 text-white font-medium py-2 px-4 rounded-md ${
              (!newLab.name || !newLab.location || !newLab.status) && 'opacity-50 cursor-not-allowed'
            }`}
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Etats;
