import React, { useContext, useState } from 'react'
import "../pages/CreateUserStyle.css"
import { Link, useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { userContext } from '../App';

function SignIn() {

const {userLogin,setUserLogin,userName,setUserName} =  useContext(userContext);

  const navigate = useNavigate();

  const [userInfo,setUserInfo] = useState({
    email : "",
    password : ""
  })

  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  

  const clickHandler = async (e) => {
    try {
      e.preventDefault();
  
      // Check if fields are empty
      if (userInfo.email === "" || userInfo.password === "") {
        return setAlert({
          open: true,
          message: "All fields are required",
          severity: "error",
        });
      }
  
      console.log("Sending user info:", userInfo);
     
  
      // Perform the fetch request
      const response = await fetch("https://hospital-management-u9f8.onrender.com/signin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
  
      // Check if response is not okay
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Fetch error:", errorData);
        return setAlert({
          open: true,
          message: errorData.message || "Sign In Failed",
          severity: "error",
        });
      }
  
      const result = await response.json();
      console.log("Result:", result);
      setUserName(result.userName);
      localStorage.setItem('token',result.token);
      console.log("token store");

      
  
      // Handle successful login
      if (result.status) {
        setAlert({
          open: true,
          message: "Sign In Successful",
          severity: "success",
        });
  
        // Navigate to another page after successful login
        setTimeout(() => {
          setUserLogin(true)
          navigate("/home"); // Change this to your desired route
        }, 1000);
      } else {
        setAlert({
          open: true,
          message: result.message || "Sign In Failed",
          severity: "error",
        });
      }
    } catch (err) {
      console.error("Catch error:", err);
      setAlert({
        open: true,
        message: "An error occurred. Please try again later.",
        severity: "error",
      });
    }
  };
  
  return (
   <>
    <>
    <div className='createUser_div'>
     <h1 style={{textAlign:'center',}}>SIGN IN</h1>
     <form action='' onSubmit={(e)=>{
      clickHandler(e)
     }}>

<div className='formStyle_div'>



     
      <label for='email'>Email</label>
      <input type='email' id='email' placeholder='Enter Email' onChange={(e)=>{
        setUserInfo({...userInfo, email : e.target.value})
      }}></input>





     
     

       <label for='password'>Password</label>
      <input type='password' id='password' placeholder='Enter Password'  onChange={(e)=>{
        setUserInfo({...userInfo, password : e.target.value})
      }}></input>

      
      
      <button type='submit' style={{padding:"10px 10px",marginTop:'10px',marginBottom:"20px"}} className='submit'>SUBMIT</button>
      <Link to='/createUser' style={{textAlign:"center",textDecoration:"underline"}}><h3>Register</h3></Link>
</div>


      
     </form>
     <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>
     
    </div>
    </>
   </>
  )
}

export default SignIn
