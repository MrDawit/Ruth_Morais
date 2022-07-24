import React, { useState } from "react";
import ContactForm from "../ContactForm";
import "./style.css";
import {
    // Carousel,
    // Image,
    Modal,
    Button,
  } from "react-bootstrap";
  
function ContactFormModal({contactFormClose}) {
    const [childContactModal, setChildContactModal] = useState(true);

    // const callbackHandleContactFormClose =()=>{
    //     handleContactFormClose();
    //   }
      const HandleContactFormClose = () => {
        setChildContactModal(false);
        contactFormClose(false);
        // console.log(`contactModal2:${contactModal2}`);
      };

    return (

<Modal id="contactFormModal" 
              show={childContactModal}
              //  onHide={HandleContactFormClose}
               >
                <Modal.Header id="contactFormModalHeader" 
                // closeButton 
                >
                  <Modal.Title/>
                  <Button id="contactFormModalButton" 
                  // onClick= {()=>{handleContactFormClose()}}
                  // onClick={handleContactFormClose}
                  onClick={()=>HandleContactFormClose()}
                  >
                    X
                  </Button>
                  
                </Modal.Header>
                <Modal.Body id="contactFormModalBody">
                  <ContactForm />
                </Modal.Body>
              </Modal>


);
}

export default ContactFormModal;