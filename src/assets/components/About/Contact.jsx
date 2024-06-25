import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'
import Modal from 'react-bootstrap/Modal';
import Footer from '../Footer/Footer';

export const Contact = () => {

  const form = useRef();
  const service_id = import.meta.env.VITE_API_SERVICEID;
  const template_id = import.meta.env.VITE_API_TEMPLATEID;
  const public_id = import.meta.env.VITE_API_PUBLICID;

  const [btnsubmit, setBtnsubmit] = useState(true);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
    user_name:{
      value:'',
      error:''
    },
    user_email:{
      value:'',
      error:''
    },
    message:{
      value:'',
      error:''
    }
  });

  const handleInputChange = (e) =>{
    setInput(prev=>({
      ...prev,
      [e.target.name]:{
        value:e.target.value,
        error:null
      }
    }));    
  };

  const clearInputValue = () =>{
    setInput({
      user_name:{
        value:'',
        error:''
      },
      user_email:{
        value:'',
        error:''
      },
      message:{
        value:'',
        error:''
      }
    });    
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [show]);

  const sendEmailForm = async (e) => {
    e.preventDefault();
    let stop = false;
    Object.keys(input).forEach(key=>{
      if (input[key].value.trim().length === 0) {
        stop = true;
        setInput(prev=>({
          ...prev,
          [key]:{
            ...prev[key],
            error:'*Este campo es obligatorio'
          }
        }));
      }
    });
    if(stop) return;

    setBtnsubmit(true);
    
    handleShow()
    try {
      const emailjs = await import('@emailjs/browser');
      emailjs.init(public_id);
      emailjs.sendForm(service_id, template_id, form.current, public_id)
        .then((result) => {
          console.log(result.text);
          clearInputValue();
          setBtnsubmit(false);
        }, (error) => {
          console.log(error.text);
        });
    } catch (error) {
      console.error('Error al cargar la biblioteca emailjs-com:', error);
    }
    // emailjs.sendForm(service_id, template_id, form.current, public_id)
    // .then((result) => {
    //   console.log(result.text);
      
    //   clearInputValue();
    //   setBtnsubmit(false);
    // }, (error) => {
    //   console.log(error.text);
    // });
  };

  return (
    <div>
      <h3>Contacto.</h3>
      <p className='media'>
        <strong>Instagram:</strong>             jorgelinaparkinson <br />
        <strong>Email:</strong>            jorgelinapark@gmail.com
      </p>
      
    <form ref={form} onSubmit={sendEmailForm} className='formContainer'>
      <p className='contactInputText'>Nombre y apellido </p>
      <input type="text" name="user_name" placeholder=''  value={input['user_name'] ? input['user_name'].value : ''}  className='inputForm' onChange={handleInputChange} />
      
      <p className='contactInputText'>Correo electrónico </p>
      <input type="email" name="user_email" placeholder='' value={input['user_email'] ? input['user_email'].value : ''} className='inputForm' onChange={handleInputChange} />

      <p className='contactInputText'>Tu mensaje </p>
      <textarea name="message" placeholder='' value={input['message'] ? input['message'].value : ''} className='inputForm messageForm'  onChange={handleInputChange}/>
      
      <div>
        <input type="submit" value="Enviar" className='formSendButton'/>
      </div>

    </form>


    <Modal show={show} onHide={handleClose} className='modalOk'>
      <Modal.Header closeButton />
      <Modal.Body>
        <p>Gracias por su consulta</p>
        <p className='modalText'>Jorgelina se pondrá en contacto con usted.</p>
      </Modal.Body>
      
    </Modal>

    <Footer />
    </div>
  );
};