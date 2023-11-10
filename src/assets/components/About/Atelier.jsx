import React from 'react'
import photo1 from '../../../assets/taller.jpeg'
import photo2 from '../../../assets/taller (2).jpeg'
import Footer from '../Footer/Footer'
import './Atelier.css'

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

function Atelier() {
    const { isLoaded } = useJsApiLoader({
      id: 'f5959e89199c6139',
      googleMapsApiKey: 'AIzaSyC8cRrh5YFeJfMpcn6-XCV2we7GdZ9hPxA'
    })
  return (
    <div>
      <h3>Taller.</h3>

      <p className='portland'>Mi taller queda en la ex fábrica de portland de la Ciudad de Paraná. 
      <br />Es el antiguo laboratorio de la fábrica.
      <br /> <strong>Av. Estrada al 2100</strong> </p>        
      <img src={photo1} alt="La cementera - mi taller" className='atelierImg' />
      <img src={photo2} alt="La cementera - mi taller" className='atelierImg' />

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