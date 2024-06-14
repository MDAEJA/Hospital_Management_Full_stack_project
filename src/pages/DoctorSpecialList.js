import React from 'react'
// import { Link } from 'react-router-dom'
import "../pages/DoctorSpecialListStyle.css"
import Header from '../component/Header'
import Footer from '../component/Footer'

function DoctorSpecialList() {
    const special_list = [
        {
            name : "Cardiology",
            emoji : "https://cdn-icons-png.flaticon.com/128/11496/11496762.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : 'https://cdn-icons-png.flaticon.com/128/11496/11496762.png',
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : "https://medi--hub.vercel.app/heart.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : "https://medi--hub.vercel.app/heart.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : "https://medi--hub.vercel.app/heart.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : "https://medi--hub.vercel.app/heart.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : "https://medi--hub.vercel.app/heart.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        },
        {
            name : "Cardiology",
            emoji : "https://medi--hub.vercel.app/heart.png",
            special : "For heart and blood pressure problems",
            specila_In : ["Chest pain","Heart Failure","Cholesterol","Chest pain","Heart Failure","Cholesterol"]
        }
    ]
  return (
   <>
   <Header></Header>
   <h1 style={{textAlign:'center',marginTop:"30px"}}>Top Specialist</h1>
   <div className='speciallist_div'>

    {
        special_list.map((item,index)=>{
            return (
                <>

    <div className='special_in'>
       <h1 style={{textAlign:"center",fontFamily:"sans-serif",fontStyle:'italic'}}>{item.name}</h1>
       <img src={item.emoji} alt='emoji_name'></img>
       <h4 style={{fontStyle:'oblique'}}>{item.special}</h4>
      <div className='special_list'>
       {
        item.specila_In.map((item,index)=>{
            return(
                <>
               <button className='click_button'>{item}</button>
                </>
            )
        })
       }
      </div>
    </div>

    

                
                </>
            )
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

export default DoctorSpecialList
