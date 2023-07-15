import React, { useState } from 'react';
import LaboratoryInfo from './LaboratoryInfo';
import NewResponsableForm from './NewResponsableForm';

const LaboratoryList = () => {
  const [laboratories, setLaboratories] = useState([
    {
      name: 'Laboratoire A',
      location: 'Paris',
      status: 'open',
      filiere: 'Informatique',
      responsables: [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
        },
        {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@example.com',
        },
      ],
    },
    {
      name: 'Laboratoire B',
      location: 'Lyon',
      status: 'closed',
      filiere: 'Biologie',
      responsables: [
        {
          firstName: 'Bob',
          lastName: 'Smith',
          email: 'bob.smith@example.com',
        },
        {
          firstName: 'Alice',
          lastName: 'Jones',
          email: 'alice.jones@example.com',
        },
      ],
    },
    {
      name: 'Laboratoire C',
      location: 'Marseille',
      status: 'open',
      filiere: 'Chimie',
      responsables: [
        {
          firstName: 'David',
          lastName: 'Lee',
          email: 'david.lee@example.com',
        },
        {
          firstName: 'Sarah',
          lastName: 'Kim',
          email: 'sarah.kim@example.com',
        },
      ],
    },
  ]);

  const [selectedFiliere, setSelectedFiliere] = useState('');

  const addResponsable = (newResponsable, labIndex) => {
    setLaboratories((prevState) => {
      const updatedLab = { ...prevState[labIndex] };
      updatedLab.responsables.push(newResponsable);
      const updatedLabs = [...prevState];
      updatedLabs[labIndex] = updatedLab;
      return updatedLabs;
    });
  };

  const handleFiliereChange = (event) => {
    setSelectedFiliere(event.target.value);
  };

  const filteredLaboratories = laboratories.filter((lab) =>
    lab.filiere.toLowerCase().includes(selectedFiliere.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center mb-4">
        <label htmlFor="filiere" className="text-sm font-medium mr-2">
          Filière :
        </label>
        <select
          name="filiere"
          id="filiere"
          value={selectedFiliere}
          onChange={handleFiliereChange}
          className="border-gray-300 border rounded-md py-2 px-3 text-sm"
        >
          <option value="">Toutes les filières</option>
          <option value="Informatique">Informatique</option>
          <option value="Biologie">Biologie</option>
          <option value="Chimie">Chimie</option>
        </select>
      </div>
      {filteredLaboratories.map((lab, labIndex) => (
        <div key={labIndex} className="mb-4">
          <LaboratoryInfo {...lab} />
          <NewResponsableForm addResponsable={(newResp) => addResponsable(newResp, labIndex)} />
        </div>
      ))}
    </div>
  );
};

export default LaboratoryList;
