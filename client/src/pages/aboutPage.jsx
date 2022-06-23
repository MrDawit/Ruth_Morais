import React, { useState } from "react"; // ,{ useContext }
import {Carousel, Image} from 'react-bootstrap';
import { motion } from "framer-motion";
import "../assets/css/aboutPage.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
// import Footer from "../components/Footer/index";

// const carouselImgItems= [
//   {
//     // href: "https://www.instagram.com/p/Bzg0W_uDIHWDlp_zwBC_w-cJJ_S5bNrDaVtdFI0/?igshid=MDJmNzVkMjY=",
//     src:"../assets/img/0.jpg",
//     altText: "Slide 1",
//     caption: "",
//   },
// ];

const AboutPage = () => {
  let [linkedInButtonColor, setLinkedInButtonColor] = useState("black");
  let [emailIconButtonColor, setEmailIconButtonColor] = useState("black");

  let linkedInHandleHoverOver = () => {
    setEmailIconButtonColor("grey");
  };
  let linkedInHandleHoverOut = () => {
    setEmailIconButtonColor("black");
  };

  let emailHandleHoverOver = () => {
    setLinkedInButtonColor("grey");
  };
  let emailHandleHoverOut = () => {
    setLinkedInButtonColor("black");
  };
  const linkedInButtonStyle = {
    color: linkedInButtonColor,
  };
  const emailIconButtonStyle = {
    color: emailIconButtonColor,
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
      {/* <Navbar /> */}

      <main className="col-xs-12 col-lg-10" id="main_about">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="aboutH1">About Ruth</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2 id="aboutH2">Marketing Project Manager</h2>
        <br />
        <h2 id="aboutH3">Strategic, Collaborative, Data-Driven</h2>
        {/* <h2 id="aboutH3">I am a strategic, collaborative and data-driven Marketing Project Manager and Sales Manager leveraging nearly 10 years of experience in supporting strategic visions through driving process implementation, delivering comprehensive training for staff and clients, and leading organizational process improvements. As a dynamic team leader, I have been recognized for driving sales, facilitating event coordination, analyzing data, and streamlining processes and procedures.</h2> */}
        <br />
        <br />
        <br />
        <div id="bioAndImageAboutSection">
          <div id="bioSection">
            <h2 id="aboutH3">Bio</h2>
            <div id="bioAbout">
              I am a strategic, collaborative and data-driven Marketing Project
              Manager and Sales Manager leveraging nearly 10 years of experience
              in supporting strategic visions through driving process
              implementation, delivering comprehensive training for staff and
              clients, and leading organizational process improvements. As a
              dynamic team leader, I have been recognized for driving sales,
              facilitating event coordination, analyzing data, and streamlining
              processes and procedures
            </div>
          </div>

          <img
            id="imageAbout"
            alt="about Ruth"
            src={require("../assets/img/aria_light.jpg").default}
          />
        </div>
        <br />
        <br />
        <div id="skillsAndQuoteAboutSection">
          <div id="skillsSection">
            <h5 id="aboutH6">Noteworthy Skills</h5>
            <div id="skillsAbout">
              Management, Project Management, Salesforce.com, Account
              Management, Sales Process, Sales, Solution Selling, Analytics,
              Enterprise Software, Sales Operations, Strategy, Lead Generation,
              Business Analysis, Customer Relationship Management (CRM),
              Microsoft Office, Training, Team Building, Customer Service,
              Business Process Improvement, Marketing, Analytical Skills,
              Training & Development, Microsoft Excel, Financial Analysis,
              FinTech, Product Management, Portfolio Management, Product Road
              Mapping, Product integration, API Development, Customer Retention,
              Key Performance Indicators, Employee Learning & Development,
              Business Development, Process Improvement, Relationship Building,
              Data Analysis, Marketing Strategy, Vendor Management, Strategic
              Planning, Sales Presentations, Revenue & Profit Growth, User
              Experience (UX), Product Launch, Project Portfolio Management,
              Budget Management, Emotional Intelligence, Non-Fungible Tokens
              (NFTs), Product Owner
            </div>
          </div>

          <div id="quoteAbout">
            “A very high standard that helps push teams forward to produce the
            best possible outcomes. As product manager, she owns the process and
            understands how to communicate in all directions so that everyone in
            the organization stays on the same page.”
            <div id="quoteSpan">— Bradley, Vice President @ Webster</div>
          </div>
        </div>

        <div id="connectAndLinks">
          <h1 id="connectHeader">Let's Connect</h1>
          <div id="aboutLinkedinAndEmail">
            <a
              id="aboutLinkedin"
              href="https://www.linkedin.com/in/ruth-morais/"
              target="_blank"
              rel="noreferrer"
              onMouseOver={() => linkedInHandleHoverOver()}
              onMouseOut={() => linkedInHandleHoverOut()}
              style={linkedInButtonStyle}
            >
              in
            </a>

            <AiOutlineMail
              id="emailIcon"
              onClick={() =>
                (window.location.href = "mailto:moraisruth@yahoo.com")
              }
              onMouseOver={() => emailHandleHoverOver()}
              onMouseOut={() => emailHandleHoverOut()}
              style={emailIconButtonStyle}
            />
          </div>
          <div id="connectComment">
            Please feel free to reach out. I am open to chatting about work or
            side projects opportunities, sharing my feedback or input, and
            really anything... As always, I’ll my best to answer you in a timely
            fashion.
          </div>
          <Link id="aboutButton" to="/resume">
            CONTACT ME
          </Link>
          <div id="connectQuote">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod porro quisquam est qui labore et dolore magna aliqua. Ut labore et dolore toil and pain veniam, quis nostrud exercitation ullamco quia dolor sit amet ut aliquip ex de finibus bonorum et malorum."
</div><div id="connectQuoteSpan">-Lorem Ipsum @ The Malorum Suite</div>
        </div>
      </main>

      {/* <modal> */}
      <div id="carouselPlacement">
        <h2 id="carouselTitle">
          Ruth-according to Instragram
        </h2>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        className="imgCarouselTest"
          // className="d-block w-100 "
          src={require("../assets/img/aria.jpg").default}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id="carouselH3">Low Def</h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <Image
        className="imgCarouselTest"
          // className="d-block w-100"
       src="https://igdownloader.com/file?id=aHR0cHM6Ly9zY29udGVudC1hdGwzLTEuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE1LzYyNDQ4ODM5XzI2NzYxNDY4NzQyMzUxNV8yNzQ0NzMyNDM5MDU2MjIxNTc2X24uanBnP3N0cD1kc3QtanBnX2UzNSZfbmNfaHQ9c2NvbnRlbnQtYXRsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDcmX25jX29oYz03OGZUeEtncXNJb0FYLU5TWXVEJmVkbT1BQUJCdmpVQkFBQUEmY2NiPTctNSZvaD0wMF9BVDlFUW5Eb0JHZTlEaTJRZ1YzTTlxYjRYTW12REZ1Y2ZhWl9xTGx3bm5sVEVnJm9lPTYyQkI5MUU5Jl9uY19zaWQ9ODNkNjAz"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 id="carouselH3">@ Tom's Wedding</h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        // fluid='true'
        // thumbnail='true'
        className="imgCarouselTest"
          // className="d-block w-100"
          src={require("../assets/img/aria_light.jpg").default}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 id="carouselH3">With the scarf!</h3>
          <p>
             
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="imgCarouselTest"
          // className="d-block w-100 "
          src={require("../assets/img/Screenshot 2022-06-23 at 00-08-04 Y.png").default}
           alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 id="carouselH3">Palm Trees! </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
        <Image
        className="imgCarouselTest"
          // className="d-block w-100"
          src={require("../assets/img/Screenshot 2022-06-23 at 00-09-50 Y.png").default}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3 id="carouselH3">Fourth of July Food Truckin' </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        // fluid='true'
        // thumbnail='true'
        className="imgCarouselTest"
          // className="d-block w-100"
          src={require("../assets/img/Screenshot 2022-06-23 at 00-09-24 Y.png").default}
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3 id="carouselH3">Ramen, Ramen, Ramen </h3>
          <p>
           
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
    {/* <div>
      <Carousel>
      <Carousel.Item >
      <img items={carouselImgItems} alt="when"/>
        <Carousel.Caption>WORK</Carousel.Caption>
      </Carousel.Item>
      </Carousel> 
      </div> */}

    {/* </modal> */}
      {/* <Footer/> */}
      {/* </div> */}
    </motion.div>
  );
};

export default AboutPage;
