import React from "react";
import { motion } from "framer-motion";
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
      <main className="col-xs-12 col-lg-10" id="main_resume">
       
        <h1 id="contactH1">My Resume</h1>
      
        <div id="resume_command">
          Simply click on the image below to view my resume.
        </div>
        <br />
        <br />
        <div id="resume_outer">
          <a
            href="https://mrdawit.github.io/Ruth_Morais/client/src/assets/files/RMorais.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <div id="resume_imageBorder">{/* img through css url link */}</div>
          </a>
        </div>
        <br />
        <br />
        <div id="resume_quote">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod porro quisquam est qui labore et dolore magna aliqua. Ut
          labore et dolore toil and pain veniam, quis nostrud exercitation
          ullamco quia dolor sit amet ut aliquip ex de finibus bonorum et
          malorum."
          <div id="resumeQuoteSig">-Lorem Ipsum @ The Malorum Suite</div>
        </div>
      </main>
    </motion.div>
  );
};

export default ContactPage;
