import React from 'react'
import './News.css'

function News() {
  return (
    <div className='prensaContainer'>
        <h3>Prensa.</h3>
        
        <video controls className='prensaVideos'>
            <source src="https://res.cloudinary.com/dsgxxcikg/video/upload/v1699474801/caiventures/lj6h61myz6no3xnd6wto.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
        </video>

        <video controls className='prensaVideos'>
            <source src="https://res.cloudinary.com/dsgxxcikg/video/upload/v1699475265/fpgezzitwuxjcjbfrvt8.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
        </video>

    </div>
  )
}

export default News