import React from "react";
import { motion } from "framer-motion";
// import ContactForm from '../components/ContactForm';
// import Tilt from '../components/Tilt/Tilt.js';
import resume from "../assets/files/RMorais.docx";
import "../assets/css/contactPage.css";

const ContactPage = () => {
  return (
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
      {/* <div className="bod"> */}
      <main className="col-xs-12 col-lg-10">
        <h1>My Resume</h1>
        <div>Simply click on the image below to view my resume.</div>
        <a
          href="https://mrdawit.github.io/Ruth_Morais/client/src/assets/files/RMorais.pdf"
          target="_blank"
          rel="noreferrer"
        >
            <div id="resume_outer">
          <div id="resume_imageBorder">
              
            {/* <img
              className="resume_image"
              alt="resume_image"
              src={require("../assets/img/resume_image.png").default}
            /> */}
          </div>
          </div>
        </a>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod porro quisquam est qui labore et dolore magna aliqua. Ut
          labore et dolore toil and pain veniam, quis nostrud exercitation
          ullamco quia dolor sit amet ut aliquip ex de finibus bonorum et
          malorum.
        </div>
        {/* <ContactForm /> */}
      </main>
      {/* <Tilt /> */}
      {/* </div> */}
    </motion.div>
  );
};

export default ContactPage;
