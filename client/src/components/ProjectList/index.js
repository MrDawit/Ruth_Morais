import React, {  useContext } from "react";
import ProjectCard from "../ProjectCard";
import { ProjectContext } from "../../utils/ProjectContext";
import "./style.css";


const ProjectList = () => {
    const [projects] = useContext(ProjectContext)
    return (
        <div className="container">
            <div className="row">
                {projects.map(project => (
                   
                     <div className="col-sm-12 col-md-6 " key={project.id} id="projectList">
                        
                        {/* <ProjectCard name={project.name} imageURL={project.imageURL} descriptionShort={project.descriptionShort} gitHubRepo={project.gitHubRepo} deployURL={project.deployURL} loginInfo ={project.loginInfo} skills ={project.skills}/> */}
                        <ProjectCard name={project.name} imageURL= {project.imageURL} deployURL={project.deployURL}/>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default ProjectList;