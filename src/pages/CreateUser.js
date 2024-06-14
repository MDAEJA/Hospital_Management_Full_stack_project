import React, { useContext, useState } from 'react'
import "../pages/CreateUserStyle.css"
import { Link ,  useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { userContext } from '../App';

// import {successMessage}


function CreateUser() {

  const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

 const {userName,setUserName} = useContext(userContext)
 

  const handleClose = () => {
    setAlert({ ...alert, open: false });
  };

  const[userInfo,setUserInfo] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    password : "",
    confirmPassword : "",
    gender : "",
    role : "",
  })

  const navigate = useNavigate();
  // const clickHandler = async(e)=>{
  //   e.preventDefault();

  //   try{

  //     if(userInfo.firstName === "" || userInfo.lastName === "" || userInfo.email === "" || userInfo.gender === "" || userInfo.role === "" || userInfo.phone === "" || userInfo.password === "" || userInfo.confirmPassword === ''){
  //       // return alert("REQUIRED ALL FIELDS")
  //       return setAlert({ open: true, message: "All fields are required", severity: "error" })
        
  //     }
  //     const uppercase = /[A-Z]/.test(userInfo.password);
  //     const lowercase = /[a-z]/.test(userInfo.password);
  //     const specialchar = /[!@#$%^&*()?.,<>]/.test(userInfo.password);
  //     const number  = /[0123456789]/.test(userInfo.password);
  
  //     if(!uppercase || !lowercase || !specialchar || !number){
  //         // return res.end("PASSWORD MUST BE CONTAIN AN UPPERCAESE CHARACTER / LOWERCASE CHARACTER /SPECIAL CHARACTER /NUMBER ALSO!!!");
  //         return setAlert({ open: true, message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.", severity: "error" });
  //     }
  
  //     if(!(userInfo.email.includes("@"))){
  //       return setAlert({ open: true, message: "Incorrect email", severity: "error" });
  //     }
  //     if(userInfo.password !== userInfo.confirmPassword){
  //       // return alert("PASSWORD AND CONFIRM PASSWORD ARE NOT MATCHING")
  //       return setAlert({ open: true, message: "Passwords do not match", severity: "error" });
  //     }
  //     if(userInfo.phone.split("").length !== 10){
  //       return setAlert({ open: true, message: "Incorrect Number", severity: "error" });
  //     }
  //     console.log(userInfo);

  //     const response = await fetch("http://localhost:10000/app/signup",{
  //       method : 'POST',
  //       headers : {
  //         'Content-Type' : 'application/json'
  //       },
  //       body : JSON.stringify(userInfo)
  //     })
  //     const result = await response.json();
  //     console.log("success");
  //     // history.push("/SignIn")
     
  //     setAlert({ open: true, message: "Sign Up Successful", severity: "success" });
  
  //     setTimeout(()=>{
  //       navigate("/signin")
  //     },3000);

  //   }
  //   catch(err){
  //     console.log(err)
  //   }

   
   
  // }
  const clickHandler = async (e) => {
    e.preventDefault();
  
    try {
      if (
        userInfo.firstName === "" ||
        userInfo.lastName === "" ||
        userInfo.email === "" ||
        userInfo.gender === "" ||
        userInfo.role === "" ||
        userInfo.phone === "" ||
        userInfo.password === "" ||
        userInfo.confirmPassword === ""
      ) {
        return setAlert({
          open: true,
          message: "All fields are required",
          severity: "error",
        });
      }
  
      const uppercase = /[A-Z]/.test(userInfo.password);
      const lowercase = /[a-z]/.test(userInfo.password);
      const specialchar = /[!@#$%^&*()?.,<>]/.test(userInfo.password);
      const number = /[0-9]/.test(userInfo.password);
  
      if (!uppercase || !lowercase || !specialchar || !number) {
        return setAlert({
          open: true,
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
          severity: "error",
        });
      }
  
      if (!userInfo.email.includes("@")) {
        return setAlert({
          open: true,
          message: "Incorrect email",
          severity: "error",
        });
      }
  
      if (userInfo.password !== userInfo.confirmPassword) {
        return setAlert({
          open: true,
          message: "Passwords do not match",
          severity: "error",
        });
      }
  
      if (userInfo.phone.length !== 10) {
        return setAlert({
          open: true,
          message: "Incorrect Number",
          severity: "error",
        });
      }
  
      console.log("Sending user info:", userInfo);
  
      const response = await fetch("https://hospital-management-u9f8.onrender.com/app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Fetch error:", errorData);
       
        
        return setAlert({
          open: true,
          message: errorData.message || "Sign Up Failed",
          severity: "error",
        });
      }
          setUserName(userInfo.firstName);
      const result = await response.json();
      console.log("Sign up success:", result);
  
      setAlert({ open: true, message: "Sign Up Successful", severity: "success" });
  
      setTimeout(() => {
        navigate("/signin");
      }, 1000);
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
    <div className='createUser_div'>
     <h1 style={{textAlign:'center',}}>CREATE ACCOUNT</h1>
     <form action='' onSubmit={(e)=>{clickHandler(e)}}>

<div className='formStyle_div'>

<label for='firstName'>First Name</label>

      <input type='text' id='firstName' placeholder='Enter First Name' onChange={(e)=>{
        setUserInfo({...userInfo,firstName : e.target.value})
      }}></input>

      <label for='lastName'>Last Name</label>
      <input type='text' id='lastName' placeholder='Enter Last Name' onChange={(e)=>{
        setUserInfo({...userInfo,lastName : e.target.value});
      }}></input>

      <label for='email'>Email</label>
      <input type='email' id='email' placeholder='Enter Email' onChange={(e)=>{
        setUserInfo({...userInfo,email : e.target.value});
      }}></input>

<div style={{display:"flex",justifyContent:'space-around',paddingTop:'10px',paddingBottom:'10px'}}>
      <label for='gender'> Gender : </label>
      <select id='gender' name='gender' className='genderStyle' onChange={(e)=>{
        setUserInfo({...userInfo,gender : e.target.value});
      }}>
         <option value={'select'} name='select'>SELECT</option>
        <option value={'male'}>Male</option>
        <option value={'female'}>Female</option>
        <option value={'others'}>Others</option>
      </select>


      <label for='role' name='role'>Role : </label>
      <select id='role' name= 'role' className='genderStyle' onChange={(e)=>{
        setUserInfo({...userInfo,role : e.target.value});
      }}>
         <option value={'select'} name='select'>SELECT</option>
        <option value={'admin'} name='admin'>ADMIN</option>
        <option value={'doctor'} name='doctor'>DOCTOR</option>
        <option value={'pateint'} name='patient'>PATIENT</option>
      </select>
      </div>



     
      <div style={{marginBottom:"10px"}}>
      <label for='pnone'>Phone : </label>
      <button style={{padding:'5px 10px',marginRight:"10px"}}>+ 91</button>
      <input type='number' id='phone' placeholder='Enter Number' onChange={(e)=>{
        setUserInfo({...userInfo,phone : e.target.value});
      }}></input></div>

       <label for='password'>Password</label>
      <input type='password' id='password' placeholder='Enter Password' onChange={(e)=>{
        setUserInfo({...userInfo,password : e.target.value});
      }}></input>

      <label for='confirmpassword'> Confirm Passowrd</label>
      <input type='password' id='confirmpassword' placeholder='Enter Confirm Password' onChange={(e)=>{
        setUserInfo({...userInfo,confirmPassword : e.target.value});
      }}></input>
      
      <button style={{padding:"10px 10px",marginTop:'10px',marginBottom:"20px"}} className='submit' type='submit'>SUBMIT</button>
</div>


     </form>

     <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>

     

     <Link to="/signin">
     <p style={{textAlign:'center',fontStyle:'italic',fontWeight:"bold",fontSize:"2rem"}}>Sing In</p>
     </Link>
    

    </div>

    
    </>
  )
}

export default CreateUser
