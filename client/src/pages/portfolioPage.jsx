import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import ProjectList from "../components/ProjectList";
import { ProjectProvider } from "../utils/ProjectContext";
import { Link } from "react-router-dom";
import "../assets/css/portfolioPage.css";
// import Spacer from '../components/Spacer';
// import Footer from '../components/Footer/index';

const ProjectListPage = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <div className="bod">
          <main className="col-xs-12 col-lg-10">
            <h2 id="h2Portfolio">
              - Ruth is a Marketing Project Manager, Sales Manager and Product
              Innovationist in the USA
            </h2>

            <ProjectProvider>
              <ProjectList />
            </ProjectProvider>
            <article className="pull-center" id="portfolioQuote">
              "I am a strategic, collaborative and data-driven Marketing Project
              Manager and Sales Manager leveraging nearly 10 years of experience
              in supporting strategic visions through driving process
              implementation, delivering comprehensive training for staff and
              clients, and leading organizational process improvements. As a
              dynamic team leader, I have been recognized for driving sales,
              facilitating event coordination, analyzing data, and streamlining
              processes and procedures."
            </article>
            <article id="portfolioSig">-Ruth Morais @ Webster</article>
          </main>
          <Link id="portfolioButton" to="/about">
            ABOUT + CONNECT
          </Link>
        </div>
        {/* <Spacer/> */}
        {/* <Footer/> */}
      </motion.div>
    </>
  );
};

export default ProjectListPage;
