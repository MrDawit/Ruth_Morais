import React, { useState, useContext } from "react";
import "./style.css"
import { Modal, Button } from "react-bootstrap";
import modalImage from "../../assets/img/AfricaIsWoke.jpg";


const PhotoCollection = ({ name, photoUrl }) => {
    const [modal, setModal] = useState(false);
    const [modalFullscreen, setModalFullscreen] = useState(true);
    // const renderModal = () => {
    //     setModal(false);
    //     //     setModalFullscreen(false);
    //     console.log("this too should be working");
    //   };
    return (
        <>

        <img alt={name} src={photoUrl} onClick={()=>{setModal(true)} } className="PhotoCollection" />
 {modal && (
          <Modal
            // className="modal"
            //     show={modal}
            show={true}
            fullscreen={modalFullscreen}
            //     onHide={renderModal()}
          >
            <Modal.Header
            //closeButton is not working
            //       closeButton
            >
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <img
                src={modalImage}
                // src={modalImage.src}
                width="200"
                className="img-fluid"
                alt="ImgTest"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  setModal(false);
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        </>
    )
};

export default PhotoCollection;