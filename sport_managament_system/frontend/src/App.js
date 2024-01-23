import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';

import './app.css';
import './index.css';

import SignUp from './Auth/SignUp.jsx';
import Achivement from './pages/Admin/Achivement.jsx';
import Coatch from './pages/Admin/Coatch';
import Equipment from './pages/Admin/Equipment';
import Sport from './pages/Admin/Sport';
import AdminHome from './pages/Admin/AdminHome.jsx';
import Shedule from './pages/Admin/Shedule';
import Score from './pages/Admin/Score';






function App() {


  return (

    <BrowserRouter>
      <Routes>

        {/* <Route path='/' element={<Login />}></Route> */}
        <Route path='/admin/login' element={<Login />}></Route>
        <Route path='/admin/register' element={<SignUp />}></Route>

        <Route path='/admin/home' element={<AdminHome />}></Route>
        <Route path='/admin/achivement' element={<Achivement />} />
        <Route path='/admin/coatch' element={<Coatch />} />
        <Route path='/admin/equipment' element={<Equipment />} />
        <Route path='/admin/sport' element={<Sport />} />
        <Route path='/admin/shedule' element={<Shedule />} />
        <Route path='/admin/score' element={<Score />} />

      </Routes>

    </BrowserRouter>



  )
}


export default App;
