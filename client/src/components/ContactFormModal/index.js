import React, { useState } from "react";
import ContactForm from "../ContactForm";
import {
    Carousel,
    // Image,
    Modal,
    Button,
  } from "react-bootstrap";
  
function ContactFormModal() {
    const [contactModal, setContactModal] = useState(true);

    const callbackHandleContactFormClose =()=>{
        handleContactFormClose();
      }
      const handleContactFormClose = () => {
        setContactModal(false);
        console.log(`contactModal:${contactModal}`);
      };

    return (

<Modal 
              show={contactModal}
               onHide={callbackHandleContactFormClose}
               >
                <Modal.Header id="aboutPageModalHeader" closeButton >
                  <Modal.Title/>
                  {/* <Button id="aboutPageModalButton" 
                  // onClick= {()=>{handleContactFormClose()}}
                  // onClick={handleContactFormClose}
                  onClick={()=>setContactModal(false)}
                  >
                    X
                  </Button> */}
                </Modal.Header>
                <Modal.Body id="aboutPageModalBody">
                  <ContactForm />
                </Modal.Body>
              </Modal>


);
}

export default ContactFormModal;