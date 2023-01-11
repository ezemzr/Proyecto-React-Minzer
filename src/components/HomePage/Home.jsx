import React from 'react'
import Homepage from './Homepage'
import imagen1 from  "../HomePage/img/descarga.jfif"
import imagen2 from "../HomePage/img/ipad.jpg"
import imagen3  from "../HomePage/img/wacth.jfif"
import imagen4 from "../HomePage/img/mac.jfif"
import "../../App.css"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    
    <div className='HomePage'>
    <Link to={'/Category/Iphone'}>
      <Homepage Title={"iPhone"} subtitle={"Big and Bigger"} img={imagen1}/>
    </Link>
    <Link to={'/Category/Ipad'}>
      <Homepage Title={"iPad "} subtitle={"Big and Bigger"}img={imagen2}/>
    </Link>
    <Link >
      <Homepage Title={"Watch"} subtitle={"Big and Bigger"}img={imagen3}/>
    </Link>
    <Link to={'/Category/MacBook'}>
      <Homepage Title={"MacBook"} subtitle={"Big and Bigger"}img={imagen4}/>
    </Link>
    
    
    

    </div>
  )
}

export default Home