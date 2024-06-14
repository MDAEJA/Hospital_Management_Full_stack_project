import React, { useEffect, useState } from 'react'
import "../component/HerComponentStyle.css"
import { Link } from 'react-router-dom';

function HeroComponent() {
    const [imgHeight,setImageHeight] = useState("1%")

    
    
      useEffect(()=>{
        const currentHieght = imgHeight.split("%").at(0);
        if(currentHieght < 20){
            setTimeout(()=>{
            
                if(currentHieght < 20){
                    const increseHeight = currentHieght + 1;
                    setImageHeight(increseHeight + "%")
                }
            },5000) 
        }
       
      },)
   
    
  return (
    <>
   
   <div className='hero_div'>
    <div className='hero_text'>
    <h1 style={{fontWeight:"bolder",fontSize:'2.5rem'}}>Making Health</h1>
    <h1 style={{fontWeight:"bolder",fontSize:'2.5rem'}}>Care Better Together</h1><br></br>
    <p style={{fontFamily:'Arial',fontSize:"1rem",paddingLeft:'10px',marginBottom:"20px"}}>Enhance patient care and optimize your administrative processes with our cutting-edge hospital management application.</p>
    
    <button className='appoinment'>make An Appointment</button>

    <Link to={'/contact'}>
    <button className='appoinment'>Contact Us</button>
    </Link>
    
    </div>

    <div className='img'>
    <img style={{marginTop:"20px"}} src='https://media.istockphoto.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=zkroAYchljsj6i954m5Ct6aqL_KJDA-juu03BMWDF1c=' height={imgHeight} alt='doctor-img'></img>
    </div>
   </div>

   <div>
    <h1 style={{textAlign:"center",marginTop:'100px',fontFamily:'revert-layer'}}>Why Choose Us</h1>
    <p style={{textAlign:"center",padding:'50px 30%',fontFamily:"sans-serif",lineHeight:"30px",fontWeight:"normal",fontSize:"20px"}}>We understand that your health and well-being are of paramount importance. Here are compelling reasons why you should choose us for your healthcare needs</p>
   </div>

   <div className='technology_div'>
    <div className='img_div'  style={{backgroundColor:"lightpink",borderRadius:"10px"}}>
        <div style={{width:'80px',height:'80px',border:'3px solid red',borderRadius:"50%",alignItems:'center'}}>
        <img src='https://cdn-icons-png.flaticon.com/128/14595/14595926.png' alt='' width={"60px"} style={{margin:"8px 8px"}}></img>
        </div>
        
        <h3 style={{margin:"5px 5px"}}>Advanced Technology</h3>
        <p style={{margin:"5px 5px"}}>loremfsghxfgxyu</p>
    </div>

    <div className='img_div' style={{backgroundColor:"lightblue",borderRadius:'10px'}}>
        <img src='https://cdn-icons-png.flaticon.com/128/2209/2209673.png' alt='' width={"60px"}></img>
        <h3 style={{margin:"5px 5px"}}>CERTIFIED DOCTORS</h3>
        <p style={{margin:"5px 5px"}}>loremfsghxfgxyu</p>
    </div>

    <div className='img_div' style={{backgroundColor:"lightcoral",borderRadius:"10px"}}>
    <div style={{width:'80px',height:'80px',border:'3px solid red',borderRadius:"50%",alignItems:'center'}}>
        <img src='https://cdn-icons-png.flaticon.com/128/5154/5154640.png' alt='' width={"60px"} style={{margin:"8px 8px",padding:'5px 5px'}}></img>
        </div>
        <h3 style={{margin:"5px 5px"}}>BEST INFRASTRUCUTRE</h3>
        <p style={{margin:"5px 5px"}}>loremfsghxfgxyu</p>
    </div>
   </div>

   <div className='health_point'>
    <h1 style={{textAlign:"center",marginTop:"20px"}}>What is Health Point?</h1>
    <p style={{padding:"20px 30%",fontFamily:"sans-serif",fontStyle:'italic',fontSize:"20px",fontWeight:"lighter",color:"whitesmoke",lineHeight:"20px"}}>Health point is a web-based platform facilitating seamless management of healthcare services, including appointments, patient records, and doctor interactions.</p>

    <div style={{display:"flex" ,padding:"20px 20px",alignItems:"center",justifyContent:"space-around"}}>
        <img src='https://plus.unsplash.com/premium_photo-1661758899958-050ce4481f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww' alt='' height={"40%"} style={{border:"2px solid whitesmoke",borderRadius:"10px"}}></img>

        <img src='https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.webp?b=1&s=170667a&w=0&k=20&c=uVL6CbSnAf-gDWyS59CrXBNDj97QM-YVIi3wRB_YiOk=' alt='' height={"40%"} style={{border:"2px solid whitesmoke",borderRadius:"10px"}}></img>


        <img src='https://media.istockphoto.com/id/1383445193/photo/shot-of-a-young-male-doctor-using-a-digital-tablet-at-work.webp?b=1&s=170667a&w=0&k=20&c=WXxPWCe-tmm6bigTeHHbyp5MpnxLyQ1sTvb-Git9nVw=' alt='' height={"210px"} width={'450px'} style={{border:"2px solid black",borderRadius:"10px"}}></img>

    </div>
   </div>

   
    </>
  )
}

export default HeroComponent
