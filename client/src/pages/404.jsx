import React from 'react';
// import {Link} from 'react-router-dom';
// import '../assets/css/404Page.css';
// import Spacer from '../components/Spacer';
import {motion} from 'framer-motion';
import '../assets/css/404Page.css';

const NotFoundPage = () => {

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
        <div id="container404">
            <h3 className="text404">404 :  Page Not Found!</h3>

           
            {/* <Link to='/home' /> */}
        </div>
 
</div>
</motion.div> 
);
};

export default NotFoundPage;