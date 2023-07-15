import { useState } from 'react';
import Reservations from './Reservation';
import Stat from './Stat';
import Etats from './Etats';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      {/* Navigation à onglets */}
      <nav className="bg-gray-800 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <ul className="flex-grow">
          <li>
            <button
              className={`block hover:bg-gray-700 rounded p-2 w-full text-left ${
                activeTab === 'home' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleTabClick('home')}
            >
              Reservation
            </button>
          </li>
          <li>
            <button
              className={`block hover:bg-gray-700 rounded p-2 w-full text-left ${
                activeTab === 'analytics' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleTabClick('analytics')}
            >
              Statistique reservation
            </button>
          </li>
          <li>
            <button
              className={`block hover:bg-gray-700 rounded p-2 w-full text-left ${
                activeTab === 'settings' ? 'bg-gray-700' : ''
              }`}
              onClick={() => handleTabClick('settings')}
            >
              Paramètres
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
           <Reservations/>
          </div>
        )}
        {activeTab === 'analytics' && (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Analytics</h1>
            <Stat/>
          </div>
        )}
        {activeTab === 'settings' && (
          <div className="p-4">
            <h1 className="text-2xl font-bold">Paramètres</h1>
            <Etats/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
