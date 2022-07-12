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



//will implement later. need to pass prop from sibling (PhotoCollectionList) after image has 
//been clicked for Carousel's activeIndex

// const CarouselPhotos = ({
//   // callbackAfterImagePress,
// }) => {
//   const [imgPhotos] = useContext(PhotoCollectionContext);
//   const handleSelect = (selectedIndex, e) => {
//     setCarouselImageIdInPage(selectedIndex);
//   };
//   // const handleSelect = (selectedIndex, e) => {
//     // setIndex2(selectedIndex);
//   // };

//   // console.log(`index onClick is ${callbackAfterImagePress}`);
//   return (
//     <>
//     {imgPhotos.map((imgPhoto) => {
//     console.log(`CarouselPhoto's imgPhoto is = ${imgPhoto.id}`);
//     // console.log(imageCarousel);
//     return (
//       <Carousel
//       id="photoCollectionCarousel"
//       style={{ backgroundColor: "black" }}
//       activeIndex={carouselImageIdInPage}
//       // activeIndex={0}
//       onSelect={handleSelect}
//       // variant="dark"
//       variant="light"
//       prevLabel={"Previous"}
//       nextLabel={"Next"}
//       interval={null}
//       fade={true}
//       // indicatorLabels={["fancy","facts"]}
//     >
//       <Carousel.Item key={imgPhoto.id}>
    
//         <img
//           // key={imgPhoto.id}
//           className="PhotoCollection"
//           alt={imgPhoto.name}
//           src={imgPhoto.localAddress}
//         />
//         <Carousel.Caption>
//                 <h3 id="carouselH3">Low Def</h3>
//                 <p> </p>
//               </Carousel.Caption>
//       </Carousel.Item>
//       </Carousel>
//     );
    
//   })}
// </>
//   )
// };

// export default CarouselPhotos;
