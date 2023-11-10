import React from 'react'
import Painting from '../Painting/Painting'
import './Gallery.css'

function Gallery({dataImages}) {
  return (
    <div className='gallery'>
      {/* <p className='serieTitle'>Nombre de la serie</p> */}
      <div className='galleryContainer'>
        
        {      
          dataImages.map((e, i) => {
            
          return (
            <Painting key={e.id+i} data={e}/>
          )
          })
        }
        
      </div>
    </div>
      
  )
}

export default Gallery
