import React, { useState, useContext,createContext } from "react";
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


 const PhotoCollectionList = ({setCarouselImageId,setImageCarousel}) => {
  const [imgPhotos] = useContext(PhotoCollectionContext);
  const [index2, setIndex2] = useState(0);
  setCarouselImageId =index2;
  const handleSelect = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleClick = () => {
  //   setImageCarousel(true);

  //   console.log(`index onClick is ${index2}`);
  // };
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
            setImageCarousel=true;
            handleShow();
            setIndex2(imgPhoto.id);
            // console.log(
            //   `imageCarousel from PhotoCollection is ${imageCarousel}`
            // );
          }}
        />
     
   

      </div>
    );
  });
};

export default PhotoCollectionList;

