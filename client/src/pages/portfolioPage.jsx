import React from 'react';
import {motion} from 'framer-motion';
import ProjectList from '../components/ProjectList';
import { ProjectProvider } from "../utils/ProjectContext";
import "../assets/css/portfolioPage.css";

const ProjectListPage = () => {

    return (

        <>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
                scale: .8,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    delay: .4
                }
            },
        }}> 
        <div className="bod">
        <main className="col-xs-12 col-lg-10">
        <h1>Portfolio</h1>
                <ProjectProvider>
                    <ProjectList/>
                </ProjectProvider>
            </main>
       
            </div>



            </motion.div>
        </>
    );
};

export default ProjectListPage;