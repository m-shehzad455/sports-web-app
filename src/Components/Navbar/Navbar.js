
import React, {useState, useEffect} from 'react'
import  { FiSearch} from "react-icons/fi"
import  { AiOutlineMenu} from "react-icons/ai"
import Logo from'./Logo/Capture.PNG';
import './Navbar.css'
import {Link } from 'react-router-dom';


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }

      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    
      }, [])
  
      return (
        
        <nav className='main-nav'>
          {(toggleMenu || screenWidth > 700) && (
            <ul className="list">
              <li>
                <Link to="/" className="items">Home</Link>
              </li>
              <li>
                <Link to="/About" className="items">About</Link>
              </li>
              <li>
                <Link to="/Sports" className="items">Sports</Link>
              </li> 
              <li>
                <Link to="/News" className="items">News</Link>
              </li> 
              <li>
                <Link to="/Features" className="items">Features</Link>
              </li> 
              <li>
                <Link to="Home"> <img  src={Logo} className="logo" alt=''/></Link></li>
              <li>
                <Link to="/Blog" className="items">Blog</Link>
              </li> 
                <div>
                 <input type="text"  className='input' placeholder='Search' /><FiSearch className='srch-icons'/>
                </div>
              <div className='btns'>
              <li>
                <Link to="/Login">Login/</Link>
              </li> 
              
              <li>
                <Link to="/Signup">Signup</Link>
              </li> 
             </div>
          
        </ul>
        
          )}
    
          <button onClick={toggleNav} className="toggle"><spna><AiOutlineMenu/></spna></button>
        </nav>
      )
    }


