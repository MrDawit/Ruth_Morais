import React, { useState, createContext } from "react";


export const PhotoCollectionContext = createContext()

export const PhotoCollectionProvider = props => {

    const [imgPhotos, setImgPhotos] = useState([

        {
            name: "aria",
            localAddress: require("../assets/img/aria.jpg").default,
            message:"Low Def",
            id: 1
        },
        {
            name: "aria_light",
            localAddress: require("../assets/img/aria_light.jpg").default,
            message:"@Tom's Wedding",
            id: 2
        },

    ]);
    return (
        <PhotoCollectionContext.Provider value={[imgPhotos, setImgPhotos]}>
            {props.children}
        </PhotoCollectionContext.Provider>

    );
}