// import logo from './logo.svg';
import './App.css';

import About from './pages/About';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Route, Routes } from 'react-router-dom';
// import SpecialList from './pages/SpecialList';
import Contact from './pages/Contact';
import DoctorSpecialList from './pages/DoctorSpecialList';
import CreateUser from './pages/CreateUser';
import SignIn from './pages/SignIn';
import { createContext, useState } from 'react';
import DoctorList from './pages/DoctorList';
import DoctorAddPage from './pages/DoctorAddPage';
import Appointment from './pages/Appointment';
import AddAppointmet from './pages/AddAppointmet';
export const userContext = createContext();

function App() {
  
  const[userLogin,setUserLogin] = useState(false);
  const[userName,setUserName] = useState("");
   

  return (
    <>

    <userContext.Provider value={{userLogin,setUserLogin,userName,setUserName}}>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      {/* <Route path='/speciallist' element={<SpecialList></SpecialList>}></Route> */}
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/doctor' element={<DoctorSpecialList></DoctorSpecialList>}></Route>
      <Route path='/createUser' element={<CreateUser></CreateUser>}></Route>
      <Route path='/signin' element={<SignIn></SignIn>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/doctorlist' element={<DoctorList></DoctorList>}></Route>
      <Route path='/doctoradd' element={<DoctorAddPage></DoctorAddPage>}></Route>
      <Route path='/appointmentlist' element={<Appointment></Appointment>}></Route>
      <Route path='/addappointment' element={<AddAppointmet></AddAppointmet>}></Route>
      {/* <Route path='/'></Route> */}
    </Routes>
    </userContext.Provider>
    
    </>
  );
}

export default App;
