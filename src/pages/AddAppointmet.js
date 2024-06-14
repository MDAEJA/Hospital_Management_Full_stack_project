import React, {useState} from 'react'
import "../pages/AddAppointmentStyle.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
// import { useState } from "react"

function AddAppointmet() {
    // {
    //     "firstName" :"farhan",
    //     "lastName" : "ahmed",
    //     "email" : "farhan@123",
    //     "phone" : "1234567890",
    //     "gender" : "male",
    //     "address" : "shahgunj",
    // "visitingDate" : "2024-06-14"
      

    const navigate = useNavigate();
    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

    const [patientDetails,setPatientDetails] = useState({
        firstName : '',
        lastName : "",
        email : "",
        phone : "",
        gender : "",
        address : "",
        visitingDate : ""
    });
    const handleClose = () => {
        setAlert({ ...alert, open: false });
      };

      const patientDetailSubmit = async (e) => {
        try {
            e.preventDefault();
    
            // Check if all required fields are filled
            const requiredFields = [
                'firstName', 'lastName', 'email', 'phone', 'gender', 
                 'address',"visitingDate"
            ];
            
            for (let field of requiredFields) {
                if (!patientDetails[field]) {
                    return setAlert({
                        open: true,
                        message: `Field ${field} is required`,
                        severity: "error",
                    });
                }
            }
    
            // Validate phone number length
            if (patientDetails.phone.length !== 10) {
                return setAlert({
                    open: true,
                    message: "Incorrect Number",
                    severity: "error",
                });
            }
    
            // Log doctorDetails to verify the data before sending
            console.log("Sending doctor info:", patientDetails);
    
            // Make the POST request to the API
            const response = await fetch("https://hospital-management-u9f8.onrender.com/pateint/addnew/pateint", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(patientDetails)
            });
    
            // Check if the request was successful
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Fetch error:", errorData);
                return setAlert({
                    open: true,
                    message: errorData.message || "Doctor Add Failed",
                    severity: "error",
                });
            }
    
            const result = await response.json();
            console.log("Doctor added successfully:", result);
    
            setAlert({ 
                open: true, 
                message: "Patient added successfully", 
                severity: "success" 
            });

            setTimeout(() => {
                navigate("/appointmentlist");
              }, 1000);
            // Optionally, clear the form or navigate to another page
            // clearForm();
            // navigate('/success-page');
            
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
   <div className='doctoradd_div'>
   <h2 style={{textAlign:'center',textDecoration:"underline",fontStyle:'italic',color:"whitesmoke"}}>Patient Registration Form</h2>
   <form action=''onSubmit={(e)=>{patientDetailSubmit(e)}} >

   <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter first Name" required onChange={(e)=>{
                    setPatientDetails({...patientDetails,firstName : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" required onChange={(e)=>{
                    setPatientDetails({...patientDetails,lastName : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" required onChange={(e)=>{
                   setPatientDetails({...patientDetails,email : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Number" pattern="[0-9]{10}" required onChange={(e)=>{
                    setPatientDetails({...patientDetails,phone : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required onChange={(e)=>{
                    setPatientDetails({...patientDetails,gender : e.target.value})
                }}>
                    <option>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="VisitingDate">Visiting Date:</label>
                <input type="date" id="visitingDate" name="visitingDate" placeholder="Enter Date" required onChange={(e)=>{
                    setPatientDetails({...patientDetails,visitingDate : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" rows="4" placeholder="Enter Address!!!" required onChange={(e)=>{
                    setPatientDetails({...patientDetails,address : e.target.value})
                }}></textarea>
            </div>
            <div class="form-group">
                <button type="submit" className='clickbutton'>Register</button>
            </div>

   </form>

   <Snackbar open={alert.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} sx={{ width: '100%' }}>
          {alert.message}
        </Alert>
      </Snackbar>

   

   </div>
   </>
  )
}

export default AddAppointmet
