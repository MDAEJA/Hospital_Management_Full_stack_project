import React, { useState } from 'react'
import "../component/FrequentlyStyle.css"
// import { Margin } from '@mui/icons-material'
function Frequently() {
    const[state,setState] = useState(false);
    const[state1,setState1] = useState(false);
    const[state2,setState2] = useState(false)
    const[state3,setState3] = useState(false)

    const clickHandler = ()=>{
        setState(!state);
    }

    const clickHandler1 = ()=>{
        setState1(!state1);
    }

    const clickHandler2 = ()=>{
        setState2(!state2);
    }
    const clickHandler3 = ()=>{
        setState3(!state3);
    }

    const div_style = {
        // border :'2px solid black',
        display : 'flex',
        flexDirection : 'column',
        alignItem : 'center',
        justifyContent : 'center',
        margin : '25px 30%',
        borderBottom :'2px solid darkCyan',
        // height : '15px'

    }
  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"30px"}}>Frequently Asked Questions</h1>
    <p style={{padding:"10px 35%",textAlign:"center",fontFamily:"sans-serif",lineHeight:"25px",fontSize:"1rem"}}>Answered all frequently asked questions, Still confused? feel free to contact us.</p>


    {

    
        (state) ?
            <>
             <div style={div_style}>
        <h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>How can i book an appointment with Health point ?</h3>
        <span style={{marginLeft:"95%" ,marginTop:"-35px",fontSize:"40px",cursor:"pointer"}} onClick={clickHandler}>-</span>
        <p style={{padding:"10px 10%",fontStyle:'oblique'}}>To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p>
    </div>
            </>
        
        :
          <>
          <div style={div_style}>
        <h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>How can i book an appointment with Health Point ?</h3>
        <span style={{marginLeft:"95%" ,marginTop:"-45px",fontSize:"40px",cursor:'pointer'}} onClick={clickHandler}>+</span>
        {/* <p style={{padding:"20px 10%"}}>To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p> */}
    </div>
          </>
        
    }


{

    
(state1) ?
    <>
     <div style={div_style}>
<h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>Why do patients visit Health Point ?</h3>
<span style={{marginLeft:"95%" ,marginTop:"-35px",fontSize:"40px",cursor:"pointer"}} onClick={clickHandler1}>-</span>
<p style={{padding:"10px 10%",fontStyle:'oblique'}}>Patients visit MediHub for health related problems. To see more reasons visit the doctor's profile on MediHub.</p>
</div>
    </>

:
  <>
  <div style={div_style}>
<h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>Why do patients visit Health Point ?</h3>
<span style={{marginLeft:"95%" ,marginTop:"-45px",fontSize:"40px",cursor:'pointer'}} onClick={clickHandler1}>+</span>
{/* <p style={{padding:"20px 10%"}}>To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p> */}
</div>
  </>

}

{

    
(state2) ?
    <>
     <div style={div_style}>
<h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>How can I take an appointment with  Health Point ?</h3>
<span style={{marginLeft:"95%" ,marginTop:"-35px",fontSize:"40px",cursor:"pointer"}} onClick={clickHandler2}>-</span>
<p style={{padding:"10px 10%",fontStyle:'oblique'}}>To book an online appointment you can visit the website of Health Point, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p>
</div>
    </>

:
  <>
  <div style={div_style}>
<h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>How can I take an appointment with  Health Point ?</h3>
<span style={{marginLeft:"95%" ,marginTop:"-45px",fontSize:"40px",cursor:'pointer'}} onClick={clickHandler2}>+</span>
{/* <p style={{padding:"20px 10%"}}>To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p> */}
</div>
  </>

}

{

    
(state3) ?
    <>
     <div style={div_style}>
<h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>Why to choose   Health Point ?</h3>
<span style={{marginLeft:"95%" ,marginTop:"-35px",fontSize:"40px",cursor:"pointer"}} onClick={clickHandler3}>-</span>
<p style={{padding:"10px 10%",fontStyle:'oblique'}}>To book an online appointment you can visit the website of Health Point, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p>
</div>
    </>

:
  <>
  <div style={div_style}>
<h3 style={{textAlign:"center",display:"inline",fontStyle:'italic'}}>Why to choose  Health Point ?</h3>
<span style={{marginLeft:"95%" ,marginTop:"-45px",fontSize:"40px",cursor:'pointer'}} onClick={clickHandler3}>+</span>
{/* <p style={{padding:"20px 10%"}}>To book an online appointment you can visit the website of MediHub, search for Docters . Once you make the payment and confirm the consultation, your online appointment will be booked for the chosen appointment time.</p> */}
</div>
  </>

}

    
    
   

    
    </>
  )
}

export default Frequently
