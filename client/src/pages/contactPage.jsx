import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Tilt from '../components/Tilt/Tilt.js';
import "../assets/css/contactPage.css";

const ContactPage = () => {

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
                <main className="col-xs-12 col-lg-10">
                    <h1>Contact</h1>
                    <ContactForm />

                </main>
                <Tilt />
            </div>
        </motion.div>
    )
};

export default ContactPage;