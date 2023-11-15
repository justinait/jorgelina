import React from 'react'
import Painting from '../Painting/Painting'
import './Gallery.css'
import PaintingModal from '../PaintingModal/PaintingModal'

function Gallery({paintings}) {
  let objectsArray = Object.values(paintings)
  return (
    <div className='gallery'>
      {/* <p className='serieTitle'>Nombre de la serie</p> */}
      <div className='galleryContainer'>
        
        {      

        //  Object.keys(paintings).map((e, i) => {
          objectsArray.map((e, i) => {
          {console.log(e)}
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
