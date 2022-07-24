import React, {
  useState,
  // useEffect,
  // useContext
} from "react";

import { Carousel, Modal, Button } from "react-bootstrap";

import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import PhotoCollectionList from "../components/PhotoCollectionList/index";
import { PhotoCollectionProvider } from "../utils/PhotoCollectionContext";
// import { PhotoCollectionContext } from "../utils/PhotoCollectionContext";

import ContactFormModal from "../components/ContactFormModal";
import "../assets/css/aboutPage.css";

const AboutPage = () => {
  const [carouselImageIdInPage, setCarouselImageIdInPage] = useState(null);

  const [carouselModal, setCarouselModal] = useState(false);
  const [openCloseAnimation, setOpenCloseAnimation] = useState(null);
  const [contactModal, setContactModal] = useState(false);

  //callback function with data from PhotoCollectionList
  const callbackAfterImagePress = (imageIndex) => {
    setCarouselImageIdInPage(imageIndex.id);
    handleShow();
    console.log(`inside callbackAfterImagePress index value: ${imageIndex.id}`);

    return { carouselImageIdInPage };
  };

  const handleCarouselClose = () => {
    // setCarouselModal(false);
    setOpenCloseAnimation("fadeOut 1s ");
    setTimeout(() => {
      setCarouselModal(false);
    }, 500);
    // handleAfterAnimation();
  };
  const handleAfterAnimation = () => {
    //setTimeout is shorter than fadeOut
    //but takes longer since outside of handleCarouselClose
    // setTimeout(() => {
    //   setCarouselModal(false);
    // }, 800);
  };

  const handleShow = () => {
    setCarouselModal(true);
    setOpenCloseAnimation("fadeIn 1s");
  };

  const handleSelect = (selectedIndex, e) => {
    setCarouselImageIdInPage(selectedIndex);
  };

  const contactFormClose = (close) => {
    setContactModal(close);
  };

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

  const ContactModal = () => {
    setContactModal(true);
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
            src={require("../assets/img/aria_light.jpg")}
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
          <div id="aboutButton" onClick={ContactModal}>
            CONTACT ME
          </div>

          {contactModal && (
            <ContactFormModal contactFormClose={contactFormClose} />
          )}

          <div id="connectQuote">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod porro quisquam est qui labore et dolore magna aliqua. Ut
            labore et dolore toil and pain veniam, quis nostrud exercitation
            ullamco quia dolor sit amet ut aliquip ex de finibus bonorum et
            malorum."
          </div>
          <div id="connectQuoteSpan">-Lorem Ipsum @ The Malorum Suite</div>
        </div>
      </main>

      <div id="carouselPlacement">
        <h2 id="carouselTitle">
          <span style={{ fontWeight: "bold" }}>Ruth</span> -according to
          Instragram
        </h2>
        <div id="photoCollectionParent">
          <PhotoCollectionProvider>
            <PhotoCollectionList
              callbackAfterImagePress={callbackAfterImagePress}
            />
          </PhotoCollectionProvider>
        </div>
      </div>

      <Modal
        show={carouselModal}
        onHide={handleCarouselClose}
        fullscreen={true}
        id="aboutPageModal"
        
        style={{ animation: openCloseAnimation }}
      >
        <Modal.Header id="aboutPageModalHeader">
          <Button id="aboutPageModalButton" onClick={handleCarouselClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body id="aboutPageModalBody">
          <Carousel
            id="photoCollectionCarousel"
            activeIndex={carouselImageIdInPage}
            onSelect={handleSelect}
            variant="light"
            prevLabel={"Previous"}
            nextLabel={"Next"}
            interval={null}
            fade={true}
          >
            {/* // image 1  */}
            <Carousel.Item className="carousel-item">
              <img
                className="imgCarousel"
                src={require("../assets/img/aria.jpg")}
                alt="First slide"
              />
              <Carousel.Caption className="imgCarouselCaption">
                <h3 id="carouselH3">Low Def</h3>
              </Carousel.Caption>
            </Carousel.Item>

            {/* // image 2  */}
            <Carousel.Item className="carousel-item">
              <img
                className="imgCarousel"
                src={require("../assets/img/tomWedding.jpg")}
                alt="Second slide"
              />
              <Carousel.Caption className="imgCarouselCaption">
                <h3 id="carouselH3">@ Tom's Wedding</h3>
              </Carousel.Caption>
            </Carousel.Item>

            {/* // image 3            */}
            <Carousel.Item className="carousel-item">
              <img
                className="imgCarousel"
                src={require("../assets/img/aria_light.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption className="imgCarouselCaption">
                <h3 id="carouselH3">With the scarf!</h3>
              </Carousel.Caption>
            </Carousel.Item>

            {/* // image 4  */}
            <Carousel.Item className="carousel-item">
              <img
                className="imgCarousel"
                src={require("../assets/img/Screenshot 2022-06-23 at 00-08-04 Y.png")}
                alt="Fourth slide"
              />
              <Carousel.Caption className="imgCarouselCaption">
                <h3 id="carouselH3">Palm Trees! </h3>
              </Carousel.Caption>
            </Carousel.Item>

            {/* // image 5 */}
            <Carousel.Item className="carousel-item">
              <img
                className="imgCarousel"
                src={require("../assets/img/Screenshot 2022-06-23 at 00-09-50 Y.png")}
                alt="Fifth slide"
              />
              <Carousel.Caption className="imgCarouselCaption">
                <h3 id="carouselH3">Fourth of July Food Truckin' </h3>
              </Carousel.Caption>
            </Carousel.Item>

            {/* // image 6  */}
            <Carousel.Item className="carousel-item">
              <img
                className="imgCarousel"
                src={require("../assets/img/Screenshot 2022-06-23 at 00-09-24 Y.png")}
                alt="Sixth slide"
              />
              <Carousel.Caption className="imgCarouselCaption">
                <h3 id="carouselH3">Ramen, Ramen, Ramen </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
};

export default AboutPage;
