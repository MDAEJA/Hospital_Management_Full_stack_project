import React from 'react'
import Header from '../component/Header'
import HeroComponent from '../component/HeroComponent'
import Frequently from '../component/Frequently'
import Footer from '../component/Footer'
import "../pages/HomeStyle.css"
import SpecialList from '../component/SpecialList'

function Home() {
  return (
    <>
    <Header></Header>
    <HeroComponent></HeroComponent>
    <SpecialList></SpecialList>
     <Frequently></Frequently>
     <Footer></Footer>
     <footer>
        <p>&copy; 2024 Hospital Management App. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Home
