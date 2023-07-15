import { Route, Routes } from 'react-router-dom';
import Connexion from '../Components/Commun/Connexion';
import UserDashboard from '../Screens/UserDashboard';

function Connect() {
  return (
   <>
   <Connexion/>
   <UserDashboard/>
   </>
  );
}

export default Connect;
