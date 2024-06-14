import React, { useState } from 'react'
import "../pages/DoctorAddStyle.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

function DoctorAddPage() {

    const navigate = useNavigate()

    const [alert, setAlert] = useState({ open: false, message: '', severity: '' });

    
    const [doctorDetails,setDoctorDetails] = useState({
        firstName : '',
        lastName : "",
        email : "",
        phone : "",
        gender : "",
        specialization : "",
        yearsOfExperience : "",
        qualifications : "",
        address : ""
    });

    const handleClose = () => {
        setAlert({ ...alert, open: false });
      };

      const doctorDetailSubmit = async (e) => {
        try {
            e.preventDefault();
    
            // Check if all required fields are filled
            const requiredFields = [
                'firstName', 'lastName', 'email', 'phone', 'gender', 
                'specialization', 'yearsOfExperience', 'qualifications', 'address'
            ];
            
            for (let field of requiredFields) {
                if (!doctorDetails[field]) {
                    return setAlert({
                        open: true,
                        message: `Field ${field} is required`,
                        severity: "error",
                    });
                }
            }
    
            // Validate phone number length
            if (doctorDetails.phone.length !== 10) {
                return setAlert({
                    open: true,
                    message: "Incorrect Number",
                    severity: "error",
                });
            }
    
            // Log doctorDetails to verify the data before sending
            console.log("Sending doctor info:", doctorDetails);
    
            // Make the POST request to the API
            const response = await fetch("https://hospital-management-u9f8.onrender.com/doctor/addnew/doctor", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(doctorDetails)
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
                message: "Doctor added successfully", 
                severity: "success" 
            });

            setTimeout(() => {
                navigate("/doctorlist");
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
   <h2 style={{textAlign:'center',textDecoration:"underline",fontStyle:'italic',color:"whitesmoke"}}>Doctor Registration Form</h2>
   <form action=''onSubmit={(e)=>{doctorDetailSubmit(e)}} >

   <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="Enter first Name" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,firstName : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,lastName : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter Email" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,email : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="Enter Number" pattern="[0-9]{10}" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,phone : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,gender : e.target.value})
                }}>
                    <option>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label for="specialization">Specialization:</label>
                <input type="text" id="specialization" name="specialization" placeholder="Enter Specialization" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,specialization : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="yearsOfExperience">Years of Experience:</label>
                <input type="number" id="yearsOfExperience" name="yearsOfExperience" min="0" placeholder="Enter Experience" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,yearsOfExperience : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="qualifications">Qualifications:</label>
                <input type="text" id="qualifications" name="qualifications" placeholder="Enter Qualification" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,qualifications : e.target.value})
                }}></input>
            </div>
            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" rows="4" placeholder="Enter Address!!!" required onChange={(e)=>{
                    setDoctorDetails({...doctorDetails,address : e.target.value})
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

export default DoctorAddPage


