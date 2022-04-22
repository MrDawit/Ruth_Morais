import React from 'react';
import {motion} from 'framer-motion';
import ProjectList from '../components/ProjectList';
import { ProjectProvider } from "../utils/ProjectContext";
import "../assets/css/portfolioPage.css";
import Spacer from '../components/Spacer';
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
    <h3 >- Ruth is a Marketing Project Manager, Sales Manager and Product Innovationist in the USA</h3> 
      
                <ProjectProvider>
                  
                    <ProjectList/>
                
                </ProjectProvider>
                <article className="pull-center">
                                 I am a strategic, collaborative and data-driven Marketing Project Manager and Sales Manager leveraging nearly 10 years of experience in supporting strategic visions through driving process implementation, delivering comprehensive training for staff and clients, and leading organizational process improvements. As a dynamic team leader, I have been recognized for driving sales, facilitating event coordination, analyzing data, and streamlining processes and procedures.
                            </article>
            </main>
       
            </div>
{/* <Spacer/> */}


            </motion.div>
        </>
    );
};

export default ProjectListPage;