import React from "react";
import "./style.css"


const PhotoCollection = ({ name, photoUrl }) => {
    return (
        <img alt={name} src={photoUrl} className="PhotoCollection" />
    )
};

export default PhotoCollection;