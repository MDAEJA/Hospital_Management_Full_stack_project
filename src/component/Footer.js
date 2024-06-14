import React from 'react';
import "../component/FooterStyle.css"

function Footer() {
  return (
    <>
    <div className='footer_div'>
    <h1 style={{textAlign:'center',textDecoration:"underline",padding:"20px 10px",}}>Health Point</h1>
    <p style={{padding:"10px 20%",textAlign:'center',lineHeight:'3rem'}}>Health Pointis a web-based platform facilitating seamless management of healthcare services, including appointments, patient records, and doctor interactions.</p>
    <div>
        <h1 style={{textAlign:'center',textDecoration:"underline",padding:"20px 10px",}}>Quick Links</h1>
        <ol style={{listStyle:'outside',display:"flex",justifyContent:"space-evenly",padding:'10px 20%'}}>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms And Conditions</li>
        </ol>
    </div>
    <h1 style={{textAlign:'center',textDecoration:"underline",padding:"20px 10px",}}>Contacts</h1>
    <div className='form_div'>
      <label style={{fontSize:"1rem",fontWeight:'bold'}}>Email  </label><br></br>
      <input type='text' placeholder='Enter Email' style={{padding:'10px 10px',border:"2px solid red",borderRadius:"10px"}}></input><br></br>
      <label style={{fontSize:"1rem",fontWeight:'bold'}}>Message  </label><br></br>
      <textarea type='text' rows="4" cols="50" placeholder='Write Your Messafe Here!!'  style={{padding:'10px 10px',height:"200px",border:"2px solid red",borderRadius:"10px"}}></textarea><br></br>
           <button style={{backgroundColor:'darkgoldenrod',padding:"10px 15px",fontSize:"1rem",color:'whitesmoke',borderRadius:"5px",cursor:"pointer",border:'2px solid whitesmoke'}} >Submit</button>
    </div>

    <ol style={{listStyle:'none',display:"flex",justifyContent:"space-evenly",padding:'10px 20%'}}>
            <li><a href='https://github.com/dashboard'><img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt='' height={'50px'} width={'50px'}></img></a></li>
            <li><a href='https://github.com/dashboard'><img src='https://cdn-icons-png.flaticon.com/128/733/733641.png' alt=''  height={'50px'} width={'50px'}></img></a></li>
            <li><a href='https://github.com/dashboard'><img src='https://cdn-icons-png.flaticon.com/128/733/733635.png' alt=''  height={'50px'} width={'50px'}></img></a></li>
            <li><a href='https://github.com/dashboard'><img src='https://cdn-icons-png.flaticon.com/128/733/733614.png' alt=''  height={'50px'} width={'50px'}></img></a></li>
        </ol>
        <h4 style={{textAlign:'center',textDecoration:"underline",fontFamily:"sans-serif",padding:"20px 10px",}}>© 2024 Aejaz Ahmed. All rights reserved.</h4>
    </div>
    </>
  )
}

export default Footer
