import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React, { useState } from 'react'

import './Header.css'

function Header() {

  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)


  const handleDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const handleDropdownMobile = () => {
    if(!show){
      setShow(true)
      } else {
        setShow(false)
        setShowDropdown(false)
      }
  }

  const handleClick =()=> {
    setShow(false);
    setShowDropdown(false);
  }
  
  const dropdown = (
    <div className='dropdownContainer'>
      <Link to="/ports2" onClick={handleClick} className='navDropdownItem'>Puentes y puertos</Link>
      <Link to="/landscape2" onClick={handleClick} className='navDropdownItem'>Paisajes</Link>
      <Link to="/parana2" onClick={handleClick} className='navDropdownItem'>Paraná</Link>
      <Link to="/route402" onClick={handleClick} className='navDropdownItem'>Ruta 40</Link>
      <Link to="/situations2" onClick={handleClick} className='navDropdownItem'>Situaciones cotidianas</Link>
      <Link to="/women2" onClick={handleClick} className='navDropdownItem'>Mujeres en el Siglo XX</Link>
      <Link to="/faces2" onClick={handleClick} className='navDropdownItem'>Rostros</Link>
      <Link to="/nature" onClick={handleClick} className='navDropdownItem'>Habitar la Naturaleza</Link>
      <Link to="/stairs" onClick={handleClick} className='navDropdownItem'>Escaleras</Link>
      <Link to="/still-life2" onClick={handleClick} className='navDropdownItem'>Naturaleza muerta</Link>
      <Link to="/ink2" onClick={handleClick} className='navDropdownItem'>Tinta</Link>
      <Link to="/cinder2" onClick={handleClick} className='navDropdownItem'>Carbonilla</Link>
      {/* <Link to="/human-figure2" onClick={handleClick} className='navDropdownItem'>Figura humana</Link> */}
      {/* <Link to="/interiors2" onClick={handleClick} className='navDropdownItem'>Interiores</Link> */}
    </div>
    )

  const navbar = (<div className='navbarItemsContainer'>
    
    <p  className='navbarItems main' onClick={handleDropdown}>PINTURAS</p>
    {showDropdown && 
    dropdown}

    <NavLink className='navbarItems' onClick={handleClick} to="/about">BIO</NavLink>
    <NavLink className='navbarItems' onClick={handleClick} to="/atelier">TALLER</NavLink>
    <NavLink className='navbarItems' onClick={handleClick} to="/news">PRENSA</NavLink>
    <NavLink className='navbarItems' onClick={handleClick} to="/contact">CONTACTO</NavLink>
  
  </div>)

  return (
    <div className='navbar'>
      <Link className='title' to="/">Jorgelina Parkinson</Link>
      
      <>
        <MenuRoundedIcon onClick={handleDropdownMobile} className='burgerMenu' fontSize='large'  />
        {show && navbar}
      </>
      
    </div>
  )
}

export default Header