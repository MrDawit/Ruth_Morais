import React, {useState, createContext} from "react";


export const ProjectContext = createContext()

export const ProjectProvider = props => {

    const [projects, setProjects] = useState([
       //with react-scripts v5 image files with jpg and png should not have '' anymore . svg file types still need '' ending 
        {
            
            name: "WigsRUs",
            imageURL: require("../assets/img/icon-linkedin.png"),
            deployURL:"https://www.linkedin.com/in/ruth-morais/",
            id: 1
        },
        // {
           
        //     name: "",
        //     descriptionShort: "",
        //     // imageURL: require("").default,
        //     gitHubRepo:"https://",
        //     deployURL:"https://",
        //     skills: "",
        //     id: 2
        // }, 
 
]); 

    return(
        <ProjectContext.Provider value={[projects, setProjects]}>
            {props.children}
        </ProjectContext.Provider>

);

}
