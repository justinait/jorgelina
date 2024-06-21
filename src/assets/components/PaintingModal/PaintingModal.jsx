import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PaintingModal.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PaintingModal({data}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const paintingImage = data && data.image;

  return (
    <>
      <div className='paintingContainer'>
        <LazyLoadImage className='galleryPainting' src={paintingImage} onClick={handleShow} threshold={300}/>
        <p className='paintingDescription'> 
        {data.award} 
        {data.title} 
        <br/>
        {data.type} 
        <br/>
        {data.cm}</p>    
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <LazyLoadImage src={paintingImage}  alt={data.title} className='modalPhoto' />
      </Modal>

    </>
  );
}

export default PaintingModal;