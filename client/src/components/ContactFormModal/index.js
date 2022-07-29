import React, { useState } from "react";
import ContactForm from "../ContactForm";
import "./style.css";
import {
    Modal,
    Button,
  } from "react-bootstrap";
  
function ContactFormModal({contactFormClose}) {
    const [childContactModal, setChildContactModal] = useState(true);

 
      const HandleContactFormClose = () => {
        setChildContactModal(false);
        contactFormClose(false);
      };

    return (

<Modal id="contactFormModal" 
              show={childContactModal}
               >
                <Modal.Header id="contactFormModalHeader" 
                >
                  <div id="contactFormModalTitleText">Let's Connect</div>
                  <Button id="contactFormModalButton" 
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