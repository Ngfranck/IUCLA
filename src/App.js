import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Connect from './Screens/Connect';
import UserDashboard from './Screens/UserDashboard';
import Responsable from './Screens/Responsable';
// import { Responsable } from './Screens/Responsable';
// import Laboratoirelist from './Screens/Laboratoirelist';
// import  Reservation  from './Screens/Reservation';
// import Dashboard from './Screens/Dashboard';

function App() {
  return (
   <div className='App'>
    <Routes>
      <Route path='/' element=''>
        <Route index element={<Connect/>} />
        <Route path='dashboard' element={<UserDashboard/>} />
        <Route path='responsable' element={<Responsable/>} />
        {/* <Route index element={<Responsable/>}/> */}
      </Route>
    </Routes>
   </div>
  );
}

export default App;
