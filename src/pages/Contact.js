import React from 'react'
import "../pages/ContactStyle.css"
import Header from '../component/Header'

function Contact() {
  return (
   <>
   <Header></Header>
   <div className='f.ooter_div'>
   <h1 style={{textAlign:'center',textDecoration:"underline",fontFamily:"sans-serif",padding:"20px 10px",}}>Contacts</h1>
    <div className='form_div'>
      <label style={{fontSize:"1rem",fontWeight:'bold'}}>Email  </label><br></br>
      <input type='text' placeholder='Enter Email' style={{padding:'10px 10px',border:"2px solid red",borderRadius:"10px"}}></input><br></br>
      <label style={{fontSize:"1rem",fontWeight:'bold'}}>Message  </label><br></br>
      <textarea type='text' rows="4" cols="50" placeholder='Write Your Messafe Here!!'  style={{padding:'10px 10px',height:"200px",border:"2px solid red",borderRadius:"10px"}}></textarea><br></br>
           <button style={{backgroundColor:"darkcyan",padding:"10px 15px",fontSize:"1rem",backgroundColor:"lightcoral",borderRadius:"10px",cursor:"pointer"}} >Submit</button>
    </div>

    <ol style={{listStyle:'none',display:"flex",justifyContent:"space-evenly",padding:'10px 20%'}}>
            <li><a href=''><img src='https://cdn-icons-png.flaticon.com/128/733/733609.png' alt='' height={'50px'} width={'50px'}></img></a></li>
            <li><a href=''><img src='https://cdn-icons-png.flaticon.com/128/733/733641.png' alt=''  height={'50px'} width={'50px'}></img></a></li>
            <li><a href=''><img src='https://cdn-icons-png.flaticon.com/128/733/733635.png' alt=''  height={'50px'} width={'50px'}></img></a></li>
            <li><a href=''><img src='https://cdn-icons-png.flaticon.com/128/733/733614.png' alt=''  height={'50px'} width={'50px'}></img></a></li>
        </ol>
        
        <h4 style={{textAlign:'center',textDecoration:"underline",fontFamily:"sans-serif",padding:"20px 10px",}}>© 2024 Aejaz Ahmed. All rights reserved.</h4>
        <footer>
        <p>&copy; 2024 Hospital Management App. All rights reserved.</p>
    </footer>
    </div>
  
   </>
  )
}

export default Contact
