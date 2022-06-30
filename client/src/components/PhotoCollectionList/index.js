import React, {  useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import PhotoCollection from "../PhotoCollection";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
import modalImage from "../../assets/img/AfricaIsWoke.jpg";

const PhotoCollectionList = () => {
const [imgPhotos] = useContext(PhotoCollectionContext)
const [modal, setModal] = useState(false);
return(
    
    imgPhotos.map((imgPhoto) => {
    console.log(`imgPhoto is = ${imgPhoto.id}`)
    return (
  <>
            <PhotoCollection name={imgPhoto.name} photoUrl={imgPhoto.localAddress}  key={imgPhoto.id} onClick={() => {
                setModal(true);
                
              }}/>
       <Button
    style={{backgroundColor:'red'}}
    onClick={()=>{setModal(true);}}
  >
    
    Click Me
  </Button>
       <Modal
                            // className="modal"
                            show={modal}
                            fullscreen={true}
                          >
                              <Modal.Header 
                              //closeButton is not working
                              closeButton
                              >
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img 
        src={modalImage}
        // src={modalImage.src} 
        width="200" className="img-fluid" alt="ImgTest"/></Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{setModal(false);}}>Close</Button>
          </Modal.Footer> 
                              </Modal>
        </>
    )})

 )}

    export default PhotoCollectionList;