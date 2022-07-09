import React, { useState, useContext, createContext } from "react";
import PhotoCollectionList from "../PhotoCollectionList/index";
import { PhotoCollectionProvider } from "../../utils/PhotoCollectionContext";

const PhotoCollectionListContext = createContext();
const PhotoCollectionListProvider = ({ children }) => {

<PhotoCollectionProvider >
            <PhotoCollectionList />
          </PhotoCollectionProvider>

  return (

    <PhotoCollectionListContext.Provider 
    // value={[imgPhotos, setImgPhotos]}
    >
      {children}
    </PhotoCollectionListContext.Provider>

  );
};
export { PhotoCollectionListContext, PhotoCollectionListProvider };
