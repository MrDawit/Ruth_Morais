import React, {
  // useState,
  useContext,
  // createContext
} from "react";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";
// import {
//   Modal,
//   Button,
//   Carousel,
//   // CloseButton,
//   Image,
// } from "react-bootstrap";
// import CloseButton from "react-bootstrap/CloseButton";
import "./style.css";

const PhotoCollectionList = ({ callbackAfterImagePress }) => {
  const [imgPhotos] = useContext(PhotoCollectionContext);

  // const handleSelect = (selectedIndex, e) => {
  // setIndex2(selectedIndex);
  // };

  // console.log(`index onClick is ${callbackAfterImagePress}`);
  return (
    <>
      {imgPhotos.map((imgPhoto) => {
        // console.log(`imgPhoto is = ${imgPhoto.id}`);
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
                callbackAfterImagePress(imgPhoto);
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default PhotoCollectionList;
