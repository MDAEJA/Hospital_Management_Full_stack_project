
import React, { useEffect, useState } from 'react'
import "../pages/DoctorListStyle.css"
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

function DoctorList() {
const [doctorDetails,setDoctorDetails] = useState([]);
const navigate = useNavigate()
const clickHandler = ()=>{
  console.log("hi");
  navigate('/doctoradd')
}

const getDoctorDetails =async ()=>{
  try{
const response = await fetch("https://hospital-management-u9f8.onrender.com/doctorlist/getdoctor");
const result = await response.json();
console.log(result.getData);
setDoctorDetails(result.getData)
console.log(doctorDetails)
  }
  catch(err){
console.log(err)
  }
}
useEffect(()=>{
  getDoctorDetails()
},[])

  return (
    <>
    <Header></Header>
   <h1 style={{textAlign:'center',textTransform:"uppercase",fontStyle:"italic",textDecoration:"underline"}}>DoctorList</h1>
    <button style={{float:"right",marginRight:"25%",marginTop:"-30px",padding:'10px 20px',marginBottom:'20px',borderRadius:"10px",backgroundColor:"darkcyan",color:'whitesmoke',border:'2px solid black',fontStyle:"italic",cursor:"pointer"}} onClick={clickHandler}>ADD DOCTOR</button>

  <div className ='doctor_div'>

    <div style={{border:'2px solid whitesmoke',padding:'10px 10px',display:"flex",display:"flex" ,gap:"50px",textAlign:"center",borderRadius:"20px",backgroundColor:'darkcyan',margin:'20px 1px'}}>
       <div style={{border:'2px solid black',padding:"10px 10px",borderRadius:"50%"}}>
        <img src='https://cdn-icons-png.flaticon.com/128/2785/2785482.png' alt='' width={'50px'}></img>
       </div>

      <div>
        <ol style={{listStyle:"none",display:"flex",gap:'200px',justifyContent:"space-evenly"}}>
            <li><h4>Dr. Name</h4></li>
            <li><h4>Experience</h4></li>
            <li><h4>Consultation Fees</h4></li>
        </ol>

        <ol style={{listStyle:"none",display:"flex",gap:'200px',justifyContent:"space-evenly",padding:"10px 10px"}}>
            <li><p style={{marginLeft:"-70px"}}>Dr xyz</p></li>
            <li><p style={{marginLeft:"-60px"}}>3</p></li>
            <li><p>200.0</p></li>
        </ol>


      </div>

    </div>

    <div style={{border:'2px solid whitesmoke',padding:'10px 10px',display:"flex",display:"flex" ,gap:"50px",textAlign:"center",borderRadius:"20px",backgroundColor:'darkcyan'}}>
       <div style={{border:'2px solid black',padding:"10px 10px",borderRadius:"50%"}}>
        <img src='https://cdn-icons-png.flaticon.com/128/2785/2785482.png' alt='' width={'50px'}></img>
       </div>

      <div>
        <ol style={{listStyle:"none",display:"flex",gap:'200px',justifyContent:"space-evenly"}}>
            <li><h4>Dr. Name</h4></li>
            <li><h4>Experience</h4></li>
            <li><h4>Consultation Fees</h4></li>
        </ol>

        <ol style={{listStyle:"none",display:"flex",gap:'200px',justifyContent:"space-evenly",padding:"10px 10px"}}>
            <li><p style={{marginLeft:"-70px"}}>Dr xyz</p></li>
            <li><p style={{marginLeft:"-60px"}}>3</p></li>
            <li><p>200.0</p></li>
        </ol>


      </div>

    </div>

{
  doctorDetails.map((item,index)=>{
    return <>

    <div style={{border:'2px solid whitesmoke',padding:'10px 10px',display:"flex",display:"flex" ,gap:"50px",textAlign:"center",borderRadius:"20px",backgroundColor:'darkcyan',margin:'20px 1px'}}>
       <div style={{border:'2px solid black',padding:"10px 10px",borderRadius:"50%"}}>
        <img src='https://cdn-icons-png.flaticon.com/128/2785/2785482.png' alt='' width={'50px'}></img>
       </div>

      <div>
        <ol style={{listStyle:"none",display:"flex",gap:'200px',justifyContent:"space-evenly"}}>
            <li><h4>Dr. Name</h4></li>
            <li><h4>Experience</h4></li>
            <li><h4>Consultation Fees</h4></li>
        </ol>

        <ol style={{listStyle:"none",display:"flex",gap:'200px',justifyContent:"space-evenly",padding:"10px 10px"}}>
            <li><p style={{marginLeft:"-70px"}}>{item.firstName}</p></li>
            <li><p style={{marginLeft:"-60px"}}>{item.yearsOfExperience}</p></li>
            <li><p>200.0</p></li>
        </ol>


      </div>
      </div>

    </>
  })
}


  </div>
  <Footer></Footer>
  <footer>
        <p>&copy; 2024 Hospital Management App. All rights reserved.</p>
    </footer>
   
    </>
  )
}

export default DoctorList
