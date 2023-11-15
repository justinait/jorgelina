import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PaintingModal.css'

function PaintingModal({data}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const paintingImage = data && data.image;

  return (
    <>
      <div className='paintingContainer'>
        <img className='galleryPainting' src={paintingImage}  onClick={handleShow}/>
        <p className='paintingDescription'> 
        {data.award} 
        {data.title} 
        <br/>
        {data.type} 
        <br/>
        {data.cm}</p>    
      </div>
      
      <Modal show={show} onHide={handleClose}>
        <img src={paintingImage}  alt={data.title} className='modalPhoto' />
      </Modal>

    </>
  );
}

export default PaintingModal;