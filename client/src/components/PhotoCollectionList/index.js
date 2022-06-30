import React, { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import PhotoCollection from "../PhotoCollection";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
import modalImage from "../../assets/img/AfricaIsWoke.jpg";

const PhotoCollectionList = () => {
  const [imgPhotos] = useContext(PhotoCollectionContext);
  const [modal, setModal] = useState(false);
 const[modalFullscreen, setModalFullscreen] = useState(true);

  const renderModal = ()=>{
        setModal(false);
        setModalFullscreen(false);
        console.log('this too should be working');
  }

  return imgPhotos.map((imgPhoto) => {
    console.log(`imgPhoto is = ${imgPhoto.id}`);
    return (
      <>
        <Button
          onClick={() => {
            setModal(true);
          }}
        >
          <PhotoCollection
            name={imgPhoto.name}
            photoUrl={imgPhoto.localAddress}
            key={imgPhoto.id}
          />

          <Modal
            // className="modal"
            show={modal}
            fullscreen={modalFullscreen}
            onHide={renderModal}
            
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
                  renderModal();
                  console.log('should be working');
                  setModal(false);
                }}
                onRequestClose={() => setModal(false)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Button>

        {/* <Button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            setModal(true);
          }}
        >
          Click Me
        </Button> */}
      </>
    );
  });
};

export default PhotoCollectionList;
