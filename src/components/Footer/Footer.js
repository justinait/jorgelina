import React, { useState } from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  
  const [showCopied, setShowCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText('jorgelinapark@gmail.com')
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  return (
    <div className='footer'>
      
      <div className='socialBox'>
        
        <div className='social'>
          <a href='https://www.instagram.com/jorgelinaparkinson/' target="_blank"  style={{textDecoration:'none', color: 'white'}}>
            < InstagramIcon fontSize='medium'/> 
          </a>
          <p>@jorgelinaparkinson</p>
        </div>

        <div className='social'>
          < EmailIcon 
            fontSize='medium' 
            onClick={handleClick}
          />
          <p>    jorgelinapark@gmail.com</p>
        
        </div>
        
        <div className='social'>
          <a href='https://www.instagram.com/jorgelinaparkinson/' target="_blank"  style={{textDecoration:'none', color: 'white'}}>
            < FacebookIcon fontSize='medium'/>
          </a>
          <p> Jorgelina Parkinson</p>
        </div>

      </div>

      {/* Jorgelina Parkinson - Artista Plástica */}
      <div className='copy'>
        Paraná, Entre Ríos, Argentina.
        <p >© Jorgelina Parkinson 2023 - Desarrollada por <a href='https://justinaiturraspe.vercel.app/' target="_blank" style={{textDecoration:'none', color: 'white'}}>Justina Iturraspe</a></p>
      </div>
      
      </div>
  )
}

export default Footer