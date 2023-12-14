import React from 'react'

// import Home from '../pages/Home';
// import Services from '../pages/Services';
// import Login from '../pages/Login';
// import Signup from '../pages/Signup';
// import Contact from '../pages/Contact';
// import DoctorDetails from '../pages/Doctors/Doctor';
// import Doctors from '../pages/Doctors/DoctorDetails';

import { Routes, Route } from 'react-router-dom';


const UserRouter = () => {
    return <Routes>
        {/* <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/services' element={<Services />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/doctors' element={<Doctors />} />
    <Route path='/doctors/:id' element={<DoctorDetails />} />
    <Route path='/' element={<Home />} /> */}
    </Routes>
}

export default UserRouter