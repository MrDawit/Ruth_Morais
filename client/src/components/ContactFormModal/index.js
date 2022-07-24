import React, { useState } from "react";
import ContactForm from "../ContactForm";
import {
    Carousel,
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

<Modal 
              show={childContactModal}
              //  onHide={HandleContactFormClose}
               >
                <Modal.Header id="aboutPageModalHeader" 
                // closeButton 
                >
                  <Modal.Title/>
                  <Button id="aboutPageModalButton" 
                  // onClick= {()=>{handleContactFormClose()}}
                  // onClick={handleContactFormClose}
                  onClick={()=>HandleContactFormClose()}
                  >
                    X
                  </Button>
                </Modal.Header>
                <Modal.Body id="aboutPageModalBody">
                  <ContactForm />
                </Modal.Body>
              </Modal>


);
}

export default ContactFormModal;