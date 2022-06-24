import React, {  useContext } from "react";
import PhotoCollection from "../PhotoCollection";
import { PhotoCollectionContext } from "../../utils/PhotoCollectionContext";

const PhotoCollectionList = () => {
const [imgPhotos] = useContext(PhotoCollectionContext)

return(
    
    imgPhotos.map((imgPhoto) => {
    console.log(`imgPhoto is = ${imgPhoto.id}`)
    return (
  
            <PhotoCollection name={imgPhoto.name} photoUrl={imgPhoto.localAddress}  key={imgPhoto.id} />
       
        
    )})

 )}

    export default PhotoCollectionList;