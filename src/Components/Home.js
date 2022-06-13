import React from 'react'
import  {RiFacebookCircleLine, RiVideoLine} from 'react-icons/ri'
import {FaInstagram} from 'react-icons/fa'
// import images from './images/photo-1574629810360-7efbbe195018.jfif'
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
       {/* <img  src={images} className="img" alt=''/> */}
      <div>
        <h1>ICC Men's <br/>
        T20 WORLD <br/>
        CUP 2022</h1> 
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Facere officiis commodi corporis saepe expedita accusamus 
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.

        </p>
      </div>
      <div>
          <button>Watch Now</button>
      </div>

          <div className='sections'>
          <div className="null-div-1"></div>
          <p>International Matches</p>
          <p>Local Matches</p>
          <p>Live Matches</p>
          <div className="null-div-2"></div>
          </div>
     

      <div className='line'>
      <div className='social-icons'>
          <FaInstagram/>
          <RiVideoLine/>
          <RiFacebookCircleLine/>
          </div>
          
      </div>
    </div>
       
    
    
  )
}

export default Home
