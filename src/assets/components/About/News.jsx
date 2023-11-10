import React from 'react'
import './News.css'
import Footer from '../Footer/Footer'
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

function News() {

  const prensa = [
    {image: photo12, text: 'Primer premio Santa Fe 2017. Crítica en el diario El Litoral de Domingo Sahda', id:'2', secondaryImage: photo4},
    {image: photo2, text: 'Muestra en AG Galería  de Arte Santa Fe. Crítica Domingo Sahda. 2015', id:'3'},
    {image: photo6, text: 'Pintura en vivo con niños. 2012', id:'4', secondaryImage: photo7},
    {image: photo5, text: 'Entrega de una obra al Cantautor Jorge Méndez. 2011', id:'5'},
    {image: photo3, text: 'Muestra en el Club Social De Parana. 2011', id:'6'},
    {image: photo9, text: 'Enero 2011', id:'7'},
    {image: photo8, text: 'Muestra en el Maran. 2010', id:'8'},
    {image: photo10, text: 'Muestra en el Maran. 2010', id:'9'},
    {image: photo11, text: '', id:'10'}
  ]
  
  
  return (
    <div>

      <div className='newsContainer'>
        <h3>Prensa.</h3>
        
        <iframe
          className='prensaVideos'
          src="https://player.vimeo.com/video/883347968?autoplay=1&badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479#t=10"
          title="SGM Jorgelina Parkinson - Video"
          width='95%'
        />          
        <p className='prensaTextVideo'>Muestra en el Museo de Salto Grande. 2023 </p>
        
        <video controls className='prensaVideos'>
          <source src="https://res.cloudinary.com/dsgxxcikg/video/upload/v1699474801/caiventures/lj6h61myz6no3xnd6wto.mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
        <p className='prensaTextVideo'>Arte en Vivo en la Ciudad de Santa Fe. Galería AG. Museo Maratón</p>

        <div className='prensaContainer'>
          
          <a target='_blank' className='prensaItem' href="https://lt15concordia.com.ar/index.php/2023/10/20/el-museo-de-salto-grande-se-lucio-con-la-nueva-muestra-de-obras-de-jorgelina-parkinson/">
            <img src={photo1} alt="diario" className='prensaPhoto' />
            <p className='prensaText'>Muestra en el Museo de Salto Grande. 2023</p>
          </a>

          {
            prensa.map((e, i)=> {
              return (
                <Link to={`/prensa/${e.id}`} key={e.id} className='prensaItem'>
                  <img src={e.image} alt="" className='prensaPhoto'/>
                  <p className='prensaText'>{e.text}</p>
                </Link>
              )
            })
          }
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default News