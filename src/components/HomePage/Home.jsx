import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Home = () => {
  return (
    <div className='inicio'>
    <Header></Header>
      <div className='HomePage'>
          <Link to={'/Category/Iphone'}>
            <div className='ipone'></div>
          </Link>
          <Link to={'/Category/Ipad'}>
            <div className='ipaad'></div>
          </Link>
        
          <Link to={'/Category/MacBook'}>
          <div className='maccc'></div>
          </Link>
          <Link to={'/watch'}>
          <div className='watchhh'>  </div>
          </Link>
      
        
        
        
      </div>
    </div>
  )
}

export default Home