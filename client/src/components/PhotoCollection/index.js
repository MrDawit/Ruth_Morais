import React, { useState, useContext } from "react";
import "./style.css";
import { Modal, Button, Carousel, Image } from "react-bootstrap";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
import PhotoCollectionList from "../PhotoCollectionList";
import  indexx from "../PhotoCollectionList";


// Plan of Attack (A or B) :
// A) fix modal close that should be working, then move onto B.
// B) create carousel and function that starts at clicked image and continues and wraps around index of images, then fix modal close issue (if one still exists)

const PhotoCollection = ({ name, photoUrl, photoKey, message }) => {
  const [imgPhotos] = useContext(PhotoCollectionContext);

  const [modal, setModal] = useState(false);
  const [modalFullscreen, setModalFullscreen] = useState(true);
  const [imageCarousel, setImageCarousel] = useState(true);
 
//   const [pCKey, setPCKey] = useState(0);
// const makeKeylocal = () => {
//     setPCKey(key);
//     console.log(`key inside makeKeylocal = ${key}`);
// }
//makeKeylocal();

//   const handleSelect = (selectedIndex, e) => {
//     setIndex2(selectedIndex);
//   };
  // const renderModal = () => {
  //     setModal(false);
  //     //     setModalFullscreen(false);
  //     console.log("this too should be working");
  //   };
//   const [index2, setIndex2] = useState(pCKey);


// const [index2, setIndex2] = useState(photoKey);
  return (
    <>
      <img
        alt={name}
        src={photoUrl}
        onClick={() => {
          //   setModal(true);
          setImageCarousel(true);
          console.log(`imageCarousel from PhotoCollection is ${imageCarousel}`);
        }}
        className="PhotoCollection"
      />

      {/* {imageCarousel && (
        <Modal
          show={true}
          fullscreen={modalFullscreen}
          style={{ backgroundColor: "black" }}
        >
              <Modal.Header
          //closeButton is not working
          //       closeButton
          >
            <Modal.Title>{photoKey}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <Carousel
            style={{ backgroundColor: "black" }}
            activeIndex={index2}
            onSelect={handleSelect}
            // variant="dark"
            variant='light'
            prevLabel={"Previous"}
            interval={null}
          >


     // image 1   
    <Carousel.Item>
              <img
                className="imgCarousel"
                // className="d-block w-100 "
                src={photoUrl}
                alt={name}
              />
              <Carousel.Caption>
                <h3 id="carouselH3">{message}</h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item> */}

          


            {/* // image 1  
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

             // image 2   
            <Carousel.Item>
              <Image
                className="imgCarousel"
                // className="d-block w-100"
                src={require("../../assets/img/tomWedding.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 id="carouselH3">@ Tom's Wedding</h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>

            // image 3 
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

             // image 4  
            <Carousel.Item>
              <img
                className="imgCarousel"
                // className="d-block w-100 "
                src={require("../../assets/img/Screenshot 2022-06-23 at 00-08-04 Y.png")}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3 id="carouselH3">Palm Trees! </h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>

             // image 5  
            <Carousel.Item>
              <Image
                className="imgCarousel"
                // className="d-block w-100"
                src={require("../../assets/img/Screenshot 2022-06-23 at 00-09-50 Y.png")}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3 id="carouselH3">Fourth of July Food Truckin' </h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>

           { // image 6   
            <Carousel.Item>
              <Image
                // fluid='true'
                // thumbnail='true'
                className="imgCarousel"
                // className="d-block w-100"
                src={require("../../assets/img/Screenshot 2022-06-23 at 00-09-24 Y.png")}
                alt="Sixth slide"
              />
              <Carousel.Caption>
                <h3 id="carouselH3">Ramen, Ramen, Ramen </h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item> */}


          {/* </Carousel>
          </Modal.Body>
          <Modal.Footer>
          <Button
              onClick={() => {
                // setModal(false);
                setImageCarousel(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )} */}

      {/* {modal && (
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
      )} */}
    </>
  );
};

export default PhotoCollection;
