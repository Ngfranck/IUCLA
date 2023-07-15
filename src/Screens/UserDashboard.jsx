import { useState } from 'react';
import Lablist from '../Components/user/Lablist';
import Calendar from '../Components/user/Calandar';
import Profile from '../Components/Commun/Profile';
// import { Link } from 'react-router-dom';
import {Images} from '../Constantes';
import { Link } from 'react-router-dom';


function Dashboard() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md">
        <nav className="px-4 py-2 flex justify-between items-center">
          <div className="text-lg font-bold ">
          <img src={Images.logo} alt='logo' className='h-16 w-16'/>
          </div>
          <Link to= '/responsable' className="text-gray-900" >
            Compte
          </Link>
        </nav>
        <div className="flex justify-center items-center py-4">
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'tab1' ? 'bg-blue-500 text-white rounded-md' : 'text-gray-900'
            }`}
            onClick={() => handleTabClick('tab1')}
          >
            Laboratoire
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'tab2' ? 'bg-blue-500 text-white rounded-md' : 'text-gray-900'
            }`}
            onClick={() => handleTabClick('tab2')}
          >
            Calendrier
          </div>
          <div
            className={`px-4 py-2 cursor-pointer ${
              activeTab === 'tab3' ? 'bg-blue-500 text-white rounded-md' : 'text-gray-900'
            }`}
            onClick={() => handleTabClick('tab3')}
          >
            Profile
          </div>
        </div>
      </div>
      <div className="p-4">
        {activeTab === 'tab1' && (
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Laboratoire</h2>
            <Lablist/>
          </div>
        )}
        {activeTab === 'tab2' && (
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Calendrier</h2>
            <Calendar/>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-4">Profile</h2>
            <Profile/>
          </div>
        )}
      </div>
    </div>
  );
}


export default Dashboard;
