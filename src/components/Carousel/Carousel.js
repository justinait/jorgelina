import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function CarouselFade() {
  return (
    <div>
      {/* Desktop Carousel */}
      <Carousel fade className='carousel carouselDesktop'>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src='./paintings/landscape/landscape (45).jpg'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src='./paintings/women/women (6).jpg'
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className='carouselItem'>
          <img
            className="d-block w-100"
            src='./paintings/everyday-situations/situations (14).jpg'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Mobile Carousel */}
      <Carousel fade className='carousel carouselMobile'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/bridges-ports/ports (14).jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/women/women (14).jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/landscape/landscape (24).jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>

      {/* Tablet Carousel */}
      <Carousel fade className='carousel carouselTablet'>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/everyday-situations/situations (11).jpg'
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/everyday-situations/situations (1).jpg'
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img
          className="d-block w-100"
          src='./paintings/stairs/stairs (2).jpg'
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
    </div>
    
  );
}

export default CarouselFade;