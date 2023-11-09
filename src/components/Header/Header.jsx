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
      <Link to="/gallery/ports2" onClick={handleClick} className='navDropdownItem'>Puentes y puertos</Link>
      <Link to="/gallery/landscape2" onClick={handleClick} className='navDropdownItem'>Paisajes</Link>
      <Link to="/gallery/parana2" onClick={handleClick} className='navDropdownItem'>Paraná</Link>
      <Link to="/gallery/route402" onClick={handleClick} className='navDropdownItem'>Ruta 40</Link>
      <Link to="/gallery/situations2" onClick={handleClick} className='navDropdownItem'>Situaciones cotidianas</Link>
      <Link to="/gallery/women2" onClick={handleClick} className='navDropdownItem'>Mujeres en el Siglo XX</Link>
      <Link to="/gallery/faces2" onClick={handleClick} className='navDropdownItem'>Rostros</Link>
      <Link to="/gallery/nature" onClick={handleClick} className='navDropdownItem'>Habitar la Naturaleza</Link>
      <Link to="/gallery/stairs" onClick={handleClick} className='navDropdownItem'>Escaleras</Link>
      <Link to="/gallery/still-life2" onClick={handleClick} className='navDropdownItem'>Naturaleza muerta</Link>
      <Link to="/gallery/ink2" onClick={handleClick} className='navDropdownItem'>Tinta</Link>
      <Link to="/gallery/cinder2" onClick={handleClick} className='navDropdownItem'>Carbonilla</Link>
      {/* <Link to="/gallery/human-figure2" onClick={handleClick} className='navDropdownItem'>Figura humana</Link> */}
      {/* <Link to="/gallery/interiors2" onClick={handleClick} className='navDropdownItem'>Interiores</Link> */}
    </div>
    )

  const navbar = (<div className='navbarItemsContainer'>
    
    <p  className='navbarItems main' onClick={handleDropdown}>PINTURAS</p>
    {showDropdown && 
    dropdown}

    <NavLink className='navbarItems' onClick={handleClick} to="/about">BIO</NavLink>
    {/* <NavLink className='navbarItems' onClick={handleClick} to="/about">STATEMENT</NavLink> */}
    <NavLink className='navbarItems' onClick={handleClick} to="/about">TALLER</NavLink>
    <NavLink className='navbarItems' onClick={handleClick} to="/news">PRENSA</NavLink>
    <NavLink className='navbarItems' onClick={handleClick} to="/about">CONTACTO</NavLink>
  
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