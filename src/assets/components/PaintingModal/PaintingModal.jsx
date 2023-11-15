import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PaintingModal.css'

function PaintingModal({photo}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [imagenUrl, setImagenUrl] = useState(null);
  useEffect(() => {
    const cargarImagen = async () => {
      try {
        const imagen = await import(/* @vite-ignore */`${photo.image}`); 
        setImagenUrl(imagen.default);
      } catch (error) {
        console.error('Error al cargar la imagen', error);
      }
    };

    cargarImagen();
  }, [photo]);
  const paintingImage = photo && photo.image;

  return (
    <>
      <div className='paintingContainer'>
        {imagenUrl && <img className='galleryPainting' src={imagenUrl}  onClick={handleShow}/>}
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
        <img src={imagenUrl}  alt={photo.title} className='modalPhoto' />
      </Modal>

    </>
  );
}

export default PaintingModal;