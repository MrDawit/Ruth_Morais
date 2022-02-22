import React, { useState, createContext } from "react";


export const SkillIconContext = createContext()

export const SkillIconProvider = props => {

    const [skillIcons, setskillIcons] = useState([

        {
            name: "html5",
            localAddress: require("../assets/img/html5.png").default,
            id: 1
        },

        {
            name: "css3",
            localAddress: require("../assets/img/css3.png").default,
            id: 2
        },

        {
            name: "javascript",
            localAddress: require("../assets/img/JS.png").default,
            id: 3
        },

        {
            name: "jquery",
            localAddress: require("../assets/img/jQuery.png").default,
            id: 4
        },

        {
            name: "mysql",
            localAddress: require("../assets/img/MySQL.jpg").default,
            id: 5
        },

        {
            name: "mongodb",
            localAddress: require("../assets/img/mongodb.png").default,
            id: 6
        },

        {
            name: "react",
            localAddress: require("../assets/img/React.png").default,
            id: 7
        },

        {
            name: "mern",
            localAddress: require("../assets/img/mern.jpg").default,
            id: 8
        },

        {
            name: "nodeJS",
            localAddress: require("../assets/img/nodeJS.png").default,
            id: 9
        },

        {
            name: "npm",
            localAddress: require("../assets/img/npm_logo.png").default,
            id: 10
        },

        {
            name: "express",
            localAddress: require("../assets/img/express.png").default,
            id: 11
        },

        {
            name: "bootsrap",
            localAddress: require("../assets/img/bootstrap.png").default,
            id: 12
        },
    ]);
    return (
        <SkillIconContext.Provider value={[skillIcons, setskillIcons]}>
            {props.children}
        </SkillIconContext.Provider>

    );
}