import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// import Spacer from '../components/Spacer';
import Tilt from '../components/Tilt/Tilt.js';
import "../assets/css/aboutPage.css";
import SkillIconList from "../components/SkillIconList/index"
import { SkillIconProvider } from "../utils/IconContext";
// import { SkillIconContext } from "../utils/IconContext";
import resume from '../assets/files/RMorais.docx';


const AboutPage = () => {
  

    return (
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
                {/* <Navbar /> */}

                <main className="col-xs-12 col-lg-10">
                    <div id="skillsAbout">

                        <h3>Roles </h3>
                        <article >Marketing Project Manager | Sales Manager | Product Innovation</article>
                        <SkillIconProvider>
                            <SkillIconList />
                        </SkillIconProvider>

                        <div id="bio">

                            <h1>Bio</h1>
                            <img alt={"Shalom Dawit"} src={require("../assets/img/aria_light.jpg").default} className="image-wrapper float-left img-responsive pr-2" id="bioImage" />

                            <article className="pull-right">
                                <span> </span> I am a strategic, collaborative and data-driven Marketing Project Manager and Sales Manager leveraging nearly 10 years of experience in supporting strategic visions through driving process implementation, delivering comprehensive training for staff and clients, and leading organizational process improvements. As a dynamic team leader, I have been recognized for driving sales, facilitating event coordination, analyzing data, and streamlining processes and procedures.
                            </article>
                            {/* <a id="purple" href={"../assets/img/pic0.jpg"} target="_blank" rel="noreferrer">RESUME</a> */}
                            <a id="purple" href={resume} download="Ruth Morais Resume"> Resume </a>
                        </div>
                    </div>
                </main>
                {/* <Spacer /> */}
                <Tilt />

                {/*  <Footer /> */}
            </div>
        </motion.div>
    );
};

export default AboutPage;