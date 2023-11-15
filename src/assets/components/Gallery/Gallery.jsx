import React from 'react'
import './Gallery.css'
import PaintingModal from '../PaintingModal/PaintingModal'

function Gallery({paintings}) {
  let objectsArray = Object.values(paintings)
  const objectsPaintings = objectsArray.slice(0, -1);

  return (
    <div className='gallery'>
      {/* <p className='serieTitle'>Nombre de la serie</p> */}
      <div className='galleryContainer'>
        
        {
          objectsPaintings.map((e, i) => {
          
          return (
            <PaintingModal key={i} data={e}/>
          )
          })
        }
        
      </div>
    </div>
      
  )
}

export default Gallery
