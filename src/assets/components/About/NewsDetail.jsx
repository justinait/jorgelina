import React, { useEffect, useState } from 'react'
import './NewsDetail.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import photo1 from '../../../assets/prensa.png'
import photo2 from '../../../assets/prensa2.jpeg'
import photo3 from '../../../assets/prensa3.jpeg'
import photo4 from '../../../assets/prensa4.jpeg'
import photo5 from '../../../assets/prensa5.jpeg'
import photo6 from '../../../assets/prensa6.jpeg'
import photo7 from '../../../assets/prensa7.jpeg'
import photo8 from '../../../assets/prensa8.jpeg'
import photo9 from '../../../assets/prensa9.jpeg'
import photo10 from '../../../assets/prensa10.jpeg'
import photo11 from '../../../assets/prensa11.jpeg'
import photo12 from '../../../assets/prensa12.jpeg'

import { Link, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'

function NewsDetail() {
    
  const {id} = useParams();
  const [news, setNews] = useState(null);
  
  const prensa = [
    {image: photo12, text: 'Primer premio Santa Fe 2017', id:'2', secondaryImage: photo4},
    {image: photo2, text: 'Muestra en AG Galería  de Arte Santa Fe. Crítica Domingo Sahda. 2015', id:'3'},
    {image: photo6, text: 'Pintura en vivo con niños. 2012', id:'4', secondaryImage: photo7},
    {image: photo5, text: 'Entrega de una obra al Cantautor Jorge Méndez. 2011', id:'5'},
    {image: photo3, text: 'Muestra en el Club Social De Parana. 2011', id:'6'},
    {image: photo9, text: 'Enero 2011', id:'7'},
    {image: photo8, text: 'Muestra en el Maran. 2010', id:'8'},
    {image: photo10, text: 'Muestra en el Maran. 2010', id:'9'},
    {image: photo11, text: '', id:'10'}
  ]
  
  useEffect(()=>{
    
    prensa.map(e=>{
      if(e.id == id){
        setNews(e);
      }
      return news;
    })
    
  }, [id])

  return (
    <div>
      <Link to='/news' className='back'> <ArrowBackIcon/> </Link>
      {
      news &&
        <div className='prensaDetailContainer'>
          
          <p className='prensaTextDetail'>{news.text}</p>
          <img src={news.image} className='prensaDetail' alt={news.text} />
          <img src={news.secondaryImage} className='prensaDetailSecondary' alt="" />
        </div>
      }
      <Link to='/news' className='back'><ArrowBackIcon/> </Link>
      <Footer />
    </div>
  )
}

export default NewsDetail