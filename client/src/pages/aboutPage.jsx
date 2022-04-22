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
            <div className="bod">
                {/* <Navbar /> */}

                <main className="col-xs-12 col-lg-10">
                    <div id="skillsAbout">

                    </div>

                </main>

         <modal>

         </modal>

            </div>
        </motion.div>
    );
};

export default AboutPage;