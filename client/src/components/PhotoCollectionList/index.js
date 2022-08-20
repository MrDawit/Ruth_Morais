import React, { useContext } from "react";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";

import "./style.css";

const PhotoCollectionList = ({ callbackAfterImagePress }) => {
  const [imgPhotos] = useContext(PhotoCollectionContext);

  return (
    <>
      {imgPhotos.map((imgPhoto) => {
        return (
          <div key={imgPhoto.id}>
            <img
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
