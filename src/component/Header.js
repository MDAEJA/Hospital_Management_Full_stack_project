import React, { useContext } from 'react'
import "../component/HeaderStyle.css"
import { Link } from 'react-router-dom'
import { userContext } from '../App'

function Header() {
 const {userLogin,userName} = useContext(userContext);
  return (
    <>
    <div className='header_div'>
      <Link to={'/home'}>
      <div className='logo'>
        <div className='logo_header'>
            <h3>Health Point</h3>
        </div>
       </div>
      </Link>
      

       <div className='navbars'>
        <ol className='navbars_tag'>
          <Link to={'/'}><li className='home'>Home</li></Link>
          <Link to={'/about'}><li className='about' style={{color:'black'}}>About</li></Link>
          <Link to={'/doctor'}><li className='about' style={{color:'black'}}>SpecialList</li></Link>
          <Link to={'/doctorlist'}><li className='about' style={{color:'black'}}>Doctors</li></Link>
          <Link to={'/appointmentlist'}><li className='about' style={{color:'black'}}>Appointment</li></Link>
          <Link to={'/blog'}><li className='about' style={{color:'black'}}>Blogs</li></Link>
          <Link to={'/contact'}><li className='about' style={{color:'black'}}>Contact</li></Link>
            
           {/* <li className='about'>About</li>
           <li className='about'>Speciallist</li>
           <li className='about'>Doctors</li>
           <li className='about'>Appointment</li>
           <li className='about'>Blog</li>
           <li className='about'>Contact</li> */}
        </ol>

       </div>
       <Link to={'/createUser'}>
       {
        (userLogin) ?
        <>
        <div className='login'>
        <h3 style={{textDecoration:'underline',textTransform:"capitalize",}}>{userName}</h3>
       </div>
        </> :
        <>
        <div className='login'>
        <h3>LOGIN</h3>
       </div>
        </>
       }
       
       </Link>
      
    </div>
    </>
  )
}

export default Header
