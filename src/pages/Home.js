import React from 'react'
import HeroSection from '../conponents/HeroSection'
import SideNav from '../conponents/SideNav'

function Home() {
  return (
    <div>
     <div className="d-flex justify-content-center " style={{overflow:"hidden", backgroundColor:"", zIndex:"-99"}}>
        <HeroSection/>
        <SideNav/>
        </div>
    </div>
  )
}

export default Home