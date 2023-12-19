import AddAchivement from '../pages/Admin/Achivement';
import Coatch from '../pages/Admin/Coatch';
import AddEquipment from '../pages/Admin/Equipment';
import AddGallary from '../pages/Admin/AddGallary';
import AddNews from '../pages/Admin/AddNews';
import Addshedule from '../pages/Admin/Schedule';
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
    <Route path='/admin/gallary' element={<AddGallary />} />
    <Route path='/admin/news' element={<AddNews />} />
    <Route path='/admin/shedule' element={<Addshedule />} />
    <Route path='/admin/score' element={<AddScore />} />
    



  </Routes>

}

export default AdminRouter