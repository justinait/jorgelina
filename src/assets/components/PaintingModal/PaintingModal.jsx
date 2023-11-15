import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './PaintingModal.css'

function PaintingModal({data}) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [imagenUrl, setImagenUrl] = useState(null);

  // useEffect(() => {
  //   const cargarImagen = async () => {
  //     try {
  //       const imagen = await import(/* @vite-ignore */`${data.image}`); 
  //       setImagenUrl(imagen.default);
  //     } catch (error) {
  //       console.error('Error al cargar la imagen', error);
  //     }
  //   };

  //   cargarImagen();
  // }, [data]);
  const paintingImage = data && data.image;

  return (
    <>
      <div className='paintingContainer'>
        {/* {imagenUrl && <img className='galleryPainting' src={imagenUrl}  onClick={handleShow}/>} */}
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
        <img src={imagenUrl}  alt={data.title} className='modalPhoto' />
      </Modal>

    </>
  );
}

export default PaintingModal;