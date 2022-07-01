import React, { useState, useContext } from "react";
import "./style.css";
import { Modal, Button, Carousel, Image, } from "react-bootstrap";
import modalImage from "../../assets/img/AfricaIsWoke.jpg";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
import PhotoCollectionList from "../PhotoCollectionList";

const PhotoCollection = ({ name, photoUrl }) => {
    const [imgPhotos] = useContext(PhotoCollectionContext);

  const [modal, setModal] = useState(false);
  const [modalFullscreen, setModalFullscreen] = useState(true);
  const [imageCarousel, setImageCarousel] = useState(false);
    const [index, setIndex] = useState(imgPhotos.id);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // const renderModal = () => {
  //     setModal(false);
  //     //     setModalFullscreen(false);
  //     console.log("this too should be working");
  //   };
  return (
    <>
      <img
        alt={name}
        src={photoUrl}
        onClick={() => {
        //   setModal(true);
        setImageCarousel(true);
        }}
        className="PhotoCollection"
      />

{imageCarousel &&
<Modal     show={true}
          fullscreen={modalFullscreen} >

 <Carousel activeIndex={index} onSelect={handleSelect}>
           {/* image 1  */}
          <Carousel.Item>
            <img
              className="imgCarousel"
              // className="d-block w-100 "
              src={require("../../assets/img/aria.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 id="carouselH3">Low Def</h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* image 2  */}
          <Carousel.Item>
            <Image
              className="imgCarousel"
              // className="d-block w-100"
              src="https://igdownloader.com/file?id=aHR0cHM6Ly9zY29udGVudC1hdGwzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1LzYyNDQ4ODM5XzI2NzYxNDY4NzQyMzUxNV8yNzQ0NzMyNDM5MDU2MjIxNTc2X24uanBnP3N0cD1kc3QtanBnX2UzNSZfbmNfaHQ9c2NvbnRlbnQtYXRsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDcmX25jX29oYz03OGZUeEtncXNJb0FYLU5TWXVEJmVkbT1BQUJCdmpVQkFBQUEmY2NiPTctNSZvaD0wMF9BVDlFUW5Eb0JHZTlEaTJRZ1YzTTlxYjRYTW12REZ1Y2ZhWl9xTGx3bm5sVEVnJm9lPTYyQkI5MUU5Jl9uY19zaWQ9ODNkNjAz"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 id="carouselH3">@ Tom's Wedding</h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>

           {/* image 3 */}
          <Carousel.Item>
            <Image
              // fluid='true'
              // thumbnail='true'
              className="imgCarousel"
              // className="d-block w-100"
              src={require("../../assets/img/aria_light.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 id="carouselH3">With the scarf!</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

           {/* image 4  */}
          <Carousel.Item>
            <img
              className="imgCarousel"
              // className="d-block w-100 "
              src={
                require("../../assets/img/Screenshot 2022-06-23 at 00-08-04 Y.png")
              }
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3 id="carouselH3">Palm Trees! </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* image 5  */}
          <Carousel.Item>
            <Image
              className="imgCarousel"
              // className="d-block w-100"
              src={
                require("../../assets/img/Screenshot 2022-06-23 at 00-09-50 Y.png")
              }
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3 id="carouselH3">Fourth of July Food Truckin' </h3>
              <p> </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* image 6  */}
          <Carousel.Item>
            <Image
              // fluid='true'
              // thumbnail='true'
              className="imgCarousel"
              // className="d-block w-100"
              src={
                require("../../assets/img/Screenshot 2022-06-23 at 00-09-24 Y.png")
              }
              alt="Sixth slide"
            />
            <Carousel.Caption>
              <h3 id="carouselH3">Ramen, Ramen, Ramen </h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
            </Carousel> 
            </Modal>

}



      {modal && (
        <Modal
          // className="modal"
          //     show={modal}
          show={true}
          fullscreen={modalFullscreen}
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
  );
};

export default PhotoCollection;
