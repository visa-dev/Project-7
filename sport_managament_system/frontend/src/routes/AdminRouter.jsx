import AddAchivement from '../pages/Admin/Achivement';
import AddCoatch from '../pages/Admin/AddCoatch';
import AddEquipment from '../pages/Admin/AddEquipment';
import AddGallary from '../pages/Admin/AddGallary';
import AddNews from '../pages/Admin/AddNews';
import Addshedule from '../pages/Admin/AddSchedule';
import AddScore from '../pages/Admin/AddScore';
import AdminHome from '../pages/Admin/AdminHome';

import { Routes, Route } from 'react-router-dom';


const AdminRouter = () => {
  return <Routes>
    <Route path='/' element={<AdminHome />} />
    <Route path='/admin/home' element={<AdminHome />} />
    <Route path='/admin/addachivement' element={<AddAchivement />} />
    <Route path='/admin/addcoatch' element={<AddCoatch />} />
    <Route path='/admin/addequipment' element={<AddEquipment />} />
    <Route path='/admin/addgallary' element={<AddGallary />} />
    <Route path='/admin/addnews' element={<AddNews />} />
    <Route path='/admin/addshedule' element={<Addshedule />} />
    <Route path='/admin/addscore' element={<AddScore />} />
    

  </Routes>
}

export default AdminRouter