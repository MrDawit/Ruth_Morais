import React, { useState, createContext } from "react";
//image link is expired and does not work
// const tomWeddingPhoto = {
//     url: "https://igdownloader.com/file?id=aHR0cHM6Ly9zY29udGVudC1hdGwzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1LzYyNDQ4ODM5XzI2NzYxNDY4NzQyMzUxNV8yNzQ0NzMyNDM5MDU2MjIxNTc2X24uanBnP3N0cD1kc3QtanBnX2UzNSZfbmNfaHQ9c2NvbnRlbnQtYXRsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDcmX25jX29oYz03OGZUeEtncXNJb0FYLU5TWXVEJmVkbT1BQUJCdmpVQkFBQUEmY2NiPTctNSZvaD0wMF9BVDlFUW5Eb0JHZTlEaTJRZ1YzTTlxYjRYTW12REZ1Y2ZhWl9xTGx3bm5sVEVnJm9lPTYyQkI5MUU5Jl9uY19zaWQ9ODNkNjAz"
// }

export const PhotoCollectionContext = createContext()

export const PhotoCollectionProvider = props => {

    const [imgPhotos, setImgPhotos] = useState([

        {
            name: "aria",
            localAddress: require("../assets/img/aria.jpg").default,
            message:"Low Def",
            id: 1
        },
        //this object would work if link was not expired
        // {
        //     name: "tomWeddingPhoto",
        //     localAddress: tomWeddingPhoto.url,
        //     message:"@Tom's Wedding",
        //     id: 2
        // },
        {
            name: "tomWeddingPhoto",
            localAddress: require("../assets/img/tomWedding.jpg").default,
            message:"@Tom's Wedding",
            id: 2
        },
        {
            name: "aria_light",
            localAddress: require("../assets/img/aria_light.jpg").default,
            message:"With the scarf!",
            id: 3
        },
        {
            name: "Screenshot 2022-06-23 at 00-08-04 Y",
            localAddress: require("../assets/img/Screenshot 2022-06-23 at 00-08-04 Y.png").default,
            message:"Palm Trees!",
            id: 4
        },
        {
            name: "Screenshot 2022-06-23 at 00-09-50 Y",
            localAddress: require("../assets/img/Screenshot 2022-06-23 at 00-09-50 Y.png").default,
            message:"Fourth of July Food Truckin'",
            id: 5
        },
        {
            name: "Screenshot 2022-06-23 at 00-09-24 Y",
            localAddress: require("../assets/img/Screenshot 2022-06-23 at 00-09-24 Y.png").default,
            message:"Ramen, Ramen, Ramen",
            id: 6
        },


    ]);
    return (
        <PhotoCollectionContext.Provider value={[imgPhotos, setImgPhotos]}>
            {props.children}
        </PhotoCollectionContext.Provider>

    );
}