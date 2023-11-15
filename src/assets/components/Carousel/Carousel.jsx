import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import photo1 from '/paintings/landscape/landscape (45).jpg'
import photo2 from '/paintings/women/women (6).jpg'
import photo3 from '/paintings/everyday-situations/situations (14).jpg'

import photo4 from '/paintings/bridges-ports/ports (14).jpg'
import photo5 from '/paintings/women/women (14).jpg'
import photo6 from '/paintings/landscape/landscape (24).jpg'

import photo7 from '/paintings/everyday-situations/situations (11).jpg'
import photo8 from '/paintings/everyday-situations/situations (1).jpg'
import photo9 from '/paintings/stairs/stairs (2).jpg'

function CarouselFade() {
  return (
    <div>
      {/* Desktop Carousel */}
      <Carousel fade className='carousel carouselDesktop'>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src={photo1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src={photo2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src={photo3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Mobile Carousel */}
      <Carousel fade className='carousel carouselMobile'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src={photo4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src={photo5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src={photo6}
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>

      {/* Tablet Carousel */}
      <Carousel fade className='carousel carouselTablet'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src={photo7}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src={photo8}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src={photo9}
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
    </div>
    
  );
}

export default CarouselFade;