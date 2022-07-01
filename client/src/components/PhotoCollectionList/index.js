import React, { useContext } from "react";
// import { Modal, Button } from "react-bootstrap";
import PhotoCollection from "../PhotoCollection";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";

const PhotoCollectionList = () => {
  const [imgPhotos] = useContext(PhotoCollectionContext);

  return imgPhotos.map((imgPhoto) => {
    console.log(`imgPhoto is = ${imgPhoto.id}`);
    return (
      <div key={imgPhoto.id}>
        <PhotoCollection name={imgPhoto.name} photoUrl={imgPhoto.localAddress}/>
      </div>
    );
  });
};

export default PhotoCollectionList;
