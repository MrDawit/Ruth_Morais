import React, { useState, useContext } from "react";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
import { Modal, Button, Carousel, Image } from "react-bootstrap";
import "./style.css";
const PhotoCollectionList = () => {
  const [imgPhotos] = useContext(PhotoCollectionContext);
  const [index2, setIndex2] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };
  const [imageCarousel, setImageCarousel] = useState(false);
  // const handleClick = () => {
  //   setImageCarousel(true);

  //   console.log(`index onClick is ${index2}`);
  // };
  return imgPhotos.map((imgPhoto) => {
    console.log(`imgPhoto is = ${imgPhoto.id}`);
    console.log(imageCarousel);
    return (
      <div key={imgPhoto.id}>
        {/* <PhotoCollection
          name={imgPhoto.name}
          photoUrl={imgPhoto.localAddress}
          key={imgPhoto.id}
          message={imgPhoto.message}
          photoKey={imgPhoto.id}
          onClick={() => {
            handleClick();
            //     setImageCarousel(true);
                setIndex2(imgPhoto.id);
            //     console.log(`index onClick is ${index2}`);
          }}
        /> */}
        <img
          // key={imgPhoto.id}
          alt={imgPhoto.name}
          src={imgPhoto.localAddress}
          onClick={() => {
            //   setModal(true);
            setImageCarousel(true);
            setIndex2(imgPhoto.id);
            console.log(
              `imageCarousel from PhotoCollection is ${imageCarousel}`
            );
          }}
          className="PhotoCollection"
        />
        {imageCarousel && (
          <Modal
            show={true}
            fullscreen={true}
            style={{ backgroundColor: "black" }}
            // key={imgPhoto.id}
          >
            <Modal.Header
            //closeButton is not working
            //       closeButton
            >
              <Modal.Title>{index2}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel
                style={{ backgroundColor: "black" }}
             activeIndex={index2}
                onSelect={handleSelect}
                // variant="dark"
                variant="light"
                prevLabel={"Previous"}
                nextLabel={"Next"}
                interval={null}
              >
                {imgPhotos.map((imgPhoto) => {
                  return (
                    <Carousel.Item key={imgPhoto.id}>
                      <img
                        className="imgCarousel"
                        // className="d-block w-100 "
                        src={imgPhoto.localAddress}
                        alt={imgPhoto.name}
                      />
                      <Carousel.Caption>
                        <h3 id="carouselH3">{imgPhoto.message}</h3>
                        <p> </p>
                      </Carousel.Caption>
                      <h3 id="carouselH3">{imgPhoto.message}</h3>
                    </Carousel.Item>
                    
                  );
                })}
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={() => {
                  setImageCarousel(false);
                }}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  });
};

export default PhotoCollectionList;
