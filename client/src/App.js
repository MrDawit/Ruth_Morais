
import React, { useState } from 'react';
import './App.css';

import {
  HashRouter as Router,
  //  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//Pages
import MainPage from './pages/aboutPage';
import NotFoundPage from './pages/404';
import ContactPage from './pages/contactPage';
import PortfolioPage from './pages/portfolioPage';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import ProjectList from './components/Project-List';
//was working pre-nodemailer form issue
import { ProjectProvider } from "./utils/ProjectContext";

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';

import {motion} from 'framer-motion';
import Tilt from './components/Tilt/Tilt.js';
import modernBackground from './assets/img/modern5.jpg';
// Tilt component image supercedes this image
// import tiltForeground from './assets/img/Globe.jpg';

//Duplicate react test
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
  const drawerToggleClickHandler = () => {
    if (sideDrawerOpen === false) { setSideDrawerOpen(true) }
    else { setSideDrawerOpen(false) }
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  const options = {
    max: 10,
    perspective: 1000,
    scale: 1.05,
  }


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
      <div className='bod'>
        <Router>
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} click={drawerToggleClickHandler} />
          {backdrop}
          <ProjectProvider>
            <Switch>
            
        <Route exact path="/" component={MainPage} />
        
              <Route exact path='/main' component={MainPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route exact path='/portfolio' component={PortfolioPage} />
              {/* <Route exact path='/404' component={NotFoundPage} /> */}
              <Route component={NotFoundPage} />
              <Redirect to='/404' />
            </Switch>
          </ProjectProvider>
       
          <Footer />
        </Router>
      </div>
      </motion.div>
    </>
  )
}

export default App;



