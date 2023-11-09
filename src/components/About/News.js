import React from 'react'
import './News.css'

function News() {
  return (
    <div className='prensaContainer'>
        <h3>Prensa.</h3>
        {/* <iframe width="671" height="491" src="https://www.youtube.com/embed/XkF3dbQlH5k" title="Se expone la muestra &quot;Mujeres en la Sociedad del Siglo XX&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        
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