import React from 'react'
import photo1 from '../../../assets/taller.jpeg'
import photo2 from '../../../assets/taller (2).jpeg'
import Footer from '../Footer/Footer'
import './Atelier.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Link } from 'react-router-dom'

function Atelier() {
  const { isLoaded } = useJsApiLoader({
    id: 'f5959e89199c6139',
    googleMapsApiKey: import.meta.env.VITE_API_MAPSKEY
  })
  return (
    <div>
      <h3>Taller.</h3>

      <p className='portland'>Mi taller queda en la ex Fábrica de Portland de la Ciudad de Paraná. 
      <br />Es el antiguo laboratorio de la fábrica.
      <br /> <strong>Av. Estrada al 2100</strong> </p>    
          
      <LazyLoadImage src={photo1} alt="La cementera - mi taller" className='atelierImg' />
      <LazyLoadImage src={photo2} alt="La cementera - mi taller" className='atelierImg' />

      <Link to='/contact'>
        <p className='contactMe'>Contactame para coordinar una visita</p>
      </Link>

      {isLoaded && 
        <GoogleMap 
          zoom={15}
          center={{ lat: -31.709889, lng: -60.551356 }}
          mapContainerClassName='mapContainer'
          mapId='f5959e89199c6139'
          className='mapContainer'
        >
          <Marker 
          position={{ lat: -31.709889, lng: -60.551356 }} 
          
          />
        </GoogleMap>
      }
          
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8cRrh5YFeJfMpcn6-XCV2we7GdZ9hPxA&callback=initMap&map_ids=f5959e89199c6139" defer></script>
   
      <Footer />
    </div>
  )
}

export default Atelier