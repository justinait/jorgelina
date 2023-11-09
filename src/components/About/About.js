import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'

function About() {
  return (
    <div>
      <h3>Biografía.</h3>
      <div className='about'>
        <a href='https://www.instagram.com/jorgelinaparkinson/' target="_blank">
          <img src='./bio.jpg' alt="" className='photoCv'/>
        </a>
        <div className='curriculum'>
          Desde 1987 comienza a realizar su proceso de aprendizaje con la prof. Chana Naon y luego con Amanda Mayor en Paraná.  
          En 1995 se radica en Buenos Aires concurre al taller de Marcelo Pellisier, Ruben Grau y Jorge Garnica.  
          Taller de Ernesto Pesce (1998)  
          Conoce al maestro Guillermo Roux y profundiza sus estudios en su escuela. Conoce alli al discipulo Norberto Marcet, continua con el su aprendizaje.  
          Concurre a Historia del Arte en la Asociacion Amigos del Museo Bellas Artes . Seminariodecrítica con López Anaya y Horacio Safons.  
          Introducción al arte contemporáneo con Fabiana Barreda.  
          Realiza escultura concurriendo al taller de Alberto del Ponte. 
          <ul>
            <li>
            Luego en 2009-  se traslada a Paraná. Taller de Figura Humana en la facultad Católica de Sta. Fe. Concurre a Artes Visuales de Paraná donde continua sus estudios de Historia del Arte.  
  Seminario de Alugrafia y Poliéster con Natalia Giachetta. 
            </li>
            <li>
              2013-  asiste al taller de Guillermo Roux. Luego en el 2014 nuevamente concurre al taller de Norberto Marcet.  
            </li>
            <li>
              2015 -Realiza Encuentros de Reflexión y Pensamiento sobre Artistas Entrerrianos desde la contemporaneidad. Taller de Patrimonio Arquitectónico con la Arq. Mariana Melhem.
            </li>
            <li>
              2017 – Curso de Arte Sacro dictado por  Luis Quirós, en la Universidad Católica de Santa Fe. Seminario de Dibujo plano, volumétrico y espacial en la UCSF.
            </li>
            <li>
              2021 – Seminario de topografía de los lenguajes visuales con Nicolas Menza
            </li>
            <li>
              2022 – Taller de Cerámica con Técnicas Prehispánicas con Karina Garret en Catamarca.
            </li>
          </ul>


        </div>
      </div>
        
      <div className='awards'>
        <h2>Exposiciones y premios </h2>
        <ul>
          <li>
            2023 Participación en Feria de Arte Paraná 
          </li>
          <li>
            2023 Muestra individual en el Museo de Salto Grande Concordia Entre Ríos.
          </li>
          <li>
            2023 Participación en +Feria Arte Contemporáneo en Santa Fe.
          </li>
          <li>
            2022 Intervenciones públicas en Galerías de Santa Fe y Paraná.
          </li>
          <li>
            2022 Seleccionada en el Salón Municipalidad de Paraná.
          </li>
          <li>
            2021 Seleccionada en el Salón BANCOR de la Pcia de Córdoba.
          </li>
          <li>
            2021 Seleccionada en el Salón del Bicentenario de MAV Concordia.
          </li>
          <li>
            2019 Muestra colectiva en GAP Paraná.
          </li>
          <li>
            2019 Muestra Colectiva en la Facultad de Derecho de la UBA.
          </li>
          <li>
            2019 Primer Premio Salón Provincial Entre Ríos.
          </li>
          <li>
            2018 Muestra colectiva en la Facultas de Derecho de la UBA.
          </li>
          <li>
            2018 Muestra individual Galeria de Arte de la Cámara Federal de Entre Ríos.
          </li>
          <li>
            2018 Muestra Casa de Gobierno de Entre Ríos.
          </li>
          <li>
            2017 Primer Premio Asosiación Artistas Plásticos Santafesinos y Municipalidad de Santa Fe.
          </li>
          <li>
            2016 Tercer Premio en la AAPS 
          </li>
          <li>
            2016 Segundo Premio en el Salón Pcial de Entre Ríos.  
          </li>
          <li>
            2015 Participa de Salones Provinciales en Entre Ríos y Santa Fe.  
          </li>
          <li>
            2013 Muestra individual Galería AG (Sta. Fe)
          </li>
          <li>
            Muestra Inauguración Pabellón de las Artes de la UCA Pna.   
          </li>
          <li>
            Muestra individual en UCSF. 
          </li>
          <li>
            Muestra colectiva en Central Newbery (2014- 2015-2016)
          </li>
          <li>
            Muestra individual en San Cristóbal (Rosario)  
          </li>
          <li>
          Desde 1995, comienza a exponer en Buenos Aires, Galería La Cave, 
          Fundación Bollini, participa en muestras intercountries, en la Municipalidad de Pilar, en Estilo Pilar, Galería La Paz (CABA).     
          </li>

        </ul>
      </div>
      
    
      <Footer/>
    
    </div>
    
  )
}

export default About