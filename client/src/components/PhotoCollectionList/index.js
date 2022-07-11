import React, { useState, useContext, createContext } from "react";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
import {
  Modal,
  Button,
  Carousel,
  // CloseButton,
  Image,
} from "react-bootstrap";
// import CloseButton from "react-bootstrap/CloseButton";
import "./style.css";

const PhotoCollectionList = ({
  callbackAfterImagePress,
  // startImageCarousel,
  imageCarouselInList,
  modalCarouselShowInList,
  modalHandleCloseInList,
}) => {
  const [imgPhotos] = useContext(PhotoCollectionContext);
  // const [index2, setIndex2] = useState(0);
  // const [imageCarousel, setImageCarousel] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    // setIndex2(selectedIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleClick = () => {
  //   setImageCarousel(true);

  //   console.log(`index onClick is ${index2}`);
  // };
  // console.log(`index onClick is ${index2}`);
  // const [imageCarousel,setImageCarousel]=useState(false);
  // carouselImageIdInList = index2;
  // imageCarouselInList = imageCarousel;
  imageCarouselInList = 0;
  modalCarouselShowInList = show;
  modalHandleCloseInList = handleClose;
  console.log(`index onClick is ${callbackAfterImagePress}`);
  return imgPhotos.map((imgPhoto) => {
    console.log(`imgPhoto is = ${imgPhoto.id}`);
    // console.log(imageCarousel);
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
          className="PhotoCollection"
          alt={imgPhoto.name}
          src={imgPhoto.localAddress}
          onClick={() => {
            //   setModal(true);
            // startImageCarousel(true);
            handleShow();
            // setIndex2(imgPhoto.id);
            callbackAfterImagePress(imgPhoto);
            // console.log(
            //   `imageCarousel from PhotoCollection is ${imageCarousel}`
            // );
            console.log("image has been clicked, next check prop variables");
          }}
        />
      </div>
    );
  });
};

export default PhotoCollectionList;
