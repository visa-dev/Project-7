import AddAchivement from '../pages/Admin/Achivement';
import Coatch from '../pages/Admin/Coatch';
import AddEquipment from '../pages/Admin/Equipment';
import AddSport from '../pages/Admin/Sport';

import AddShedule from '../pages/Admin/Shedule';
import AddScore from '../pages/Admin/Score';
import AdminHome from '../pages/Admin/AdminHome';

import { Routes, Route } from 'react-router-dom';




const AdminRouter = () => {
  return <Routes>
  
    <Route path='/' element={<AdminHome />} />
    <Route path='/admin/home' element={<AdminHome />} />
    <Route path='/admin/achivement' element={<AddAchivement />} />
    <Route path='/admin/coatch' element={<Coatch />} />
    <Route path='/admin/equipment' element={<AddEquipment />} />
    <Route path='/admin/sport' element={<AddSport/>} />
    {/* <Route path='/admin/news' element={<AddNews />} /> */}
    <Route path='/admin/shedule' element={<AddShedule />} />
    <Route path='/admin/score' element={<AddScore />} />
    



  </Routes>

}

export default AdminRouter