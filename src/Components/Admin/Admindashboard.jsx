import { useState } from 'react';
import LaboratoryList from './responssable';

function Admindashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      {/* Navigation à onglets */}
      <nav className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-xl font-bold">SuperAdministrateur</h1>
        </div>
        <ul className="flex-grow">
          <li>
            <button
              className={`block hover:bg-gray-700 rounded p-2 w-full text-left ${
                activeTab === 'home' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleTabClick('home')}
            >
              Responssable
            </button>
          </li>
          <li>
            <button
              className={`block hover:bg-gray-700 rounded p-2 w-full text-left ${
                activeTab === 'analytics' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleTabClick('analytics')}
            >
              Filiere
            </button>
          </li>
          <li>
            <button
              className={`block hover:bg-gray-700 rounded p-2 w-full text-left ${
                activeTab === 'settings' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleTabClick('settings')}
            >
              Profile 
            </button>
          </li>
        </ul>
      </nav>

      {/* Contenu principal */}
      <div className="flex-grow bg-gray-100">
        {/* Contenu de l'onglet sélectionné */}
        {activeTab === 'home' && (
          <div className="p-4">
            {/* <h1 className="text-2xl font-bold">Reservation</h1> */}
            <LaboratoryList/>
          </div>
        )}
        {activeTab === 'analytics' && (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Analytics</h1>
         
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Paramètres</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admindashboard;
