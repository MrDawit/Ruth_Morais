import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import "../assets/css/aboutPage.css";


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
            {/* <div className="bod"> */}
                {/* <Navbar /> */}

                <main className="col-xs-12 col-lg-10" id="main_about">
                <br/><br/><br/><br/><br/><br/><br/>
                    <h1 id="aboutH1">About Ruth</h1>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <h2 id="aboutH2">Marketing Project Manager</h2>
                    <br/>
                    <h2 id="aboutH3">Strategic, Collaborative, Data-Driven</h2>
                    {/* <h2 id="aboutH3">I am a strategic, collaborative and data-driven Marketing Project Manager and Sales Manager leveraging nearly 10 years of experience in supporting strategic visions through driving process implementation, delivering comprehensive training for staff and clients, and leading organizational process improvements. As a dynamic team leader, I have been recognized for driving sales, facilitating event coordination, analyzing data, and streamlining processes and procedures.</h2> */}
                    <br/><br/><br/>
                    <div id="skillsAbout">

                    </div>

                </main>

         <modal>

         </modal>

            {/* </div> */}
        </motion.div>
    );
};

export default AboutPage;