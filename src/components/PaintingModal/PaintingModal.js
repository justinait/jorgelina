import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PaintingModal.css'

function PaintingModal({photo}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div className='paintingContainer'>
        <img className='galleryPainting' src={photo.image}  onClick={handleShow}/>
      
        <p className='paintingDescription'> 
        {photo.award} 
        {photo.title} 
        <br/>
        {photo.type} 
        <br/>
        {photo.cm}</p>    
      </div>
      
      {/* <p> {`${photo.award}.`} {photo.title + '.'} {photo.type + '.'} {photo.cm}</p> */}


      <Modal show={show} onHide={handleClose}>
          <img src={photo.image}  alt={photo.title} className='modalPhoto' />
      </Modal>

    </>
  );
}

export default PaintingModal;