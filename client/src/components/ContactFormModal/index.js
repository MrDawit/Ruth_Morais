import React, { useState } from "react";
import ContactForm from "../ContactForm";
import {
    Carousel,
    // Image,
    Modal,
    Button,
  } from "react-bootstrap";
  
function ContactFormModal({callbackAfterContactFormClose}) {
    const [contactModal2, setContactModal2] = useState(true);

    const callbackHandleContactFormClose =()=>{
        handleContactFormClose();
      }
      const handleContactFormClose = () => {
        setContactModal2(false);
        callbackAfterContactFormClose(false);
        // console.log(`contactModal2:${contactModal2}`);
      };

    return (

<Modal 
              show={contactModal2}
               onHide={callbackHandleContactFormClose}
               >
                <Modal.Header id="aboutPageModalHeader" 
                closeButton 
                >
                  <Modal.Title/>
                  {/* <Button id="aboutPageModalButton" 
                  // onClick= {()=>{handleContactFormClose()}}
                  // onClick={handleContactFormClose}
                  onClick={()=>setContactModal2(false)}
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