import React, { useState, useEffect, useContext } from "react"; // ,{ useContext }
import {
  Carousel,
  // Image,
  Modal,
  Button,
} from "react-bootstrap";
// import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { motion } from "framer-motion";
// import "../assets/css/aboutPage.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import PhotoCollectionList from "../components/PhotoCollectionList/index";
import { PhotoCollectionProvider } from "../utils/PhotoCollectionContext";
import { PhotoCollectionContext } from "../utils/PhotoCollectionContext";

import ContactFormModal from "../components/ContactFormModal";
import "../assets/css/aboutPage.css";
// import CarouselPhotos from "../components/PhotoCollectionList/CarouselPhotos";
// import {
//   PhotoCollectionListProvider,
//   PhotoCollectionListContext,
// } from "../components/PhotoCollectionList/PhotoCollectionListContext.js";

const AboutPage = () => {
  // const [imgPhotos] = useContext(PhotoCollectionContext);
  const [carouselImageIdInPage, setCarouselImageIdInPage] = useState(null);
  // const [imageCarouselInPage, setImageCarouselInPage] = useState(false);

  const [modal, setModal] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState("fadeMe 2s");
  const [contactModal, setContactModal] = useState(false);
  // const[contactModalNumber,setContactModalNumber]=useState(1);
  const[test,setTest]=useState(true);
  //callback function with data from PhotoCollectionList
  const callbackAfterImagePress = (imageIndex) => {
    setCarouselImageIdInPage(imageIndex.id);
    handleShow();
    console.log(`inside callbackAfterImagePress index value: ${imageIndex.id}`);

    return { carouselImageIdInPage };
  };

  const handleCarouselClose = () => {
    setModal(false);
    setCloseAnimation("fadeIn 2s ");
    // setContactModal(false);
    console.log(`contactModal:${contactModal}`);
    console.log(`outside callbackAfterContactFormClose test value: ${test}`)
  };
  // const callbackHandleContactFormClose =()=>{
  //   handleContactFormClose();
  // }
  // const handleContactFormClose = () => {
  //   setContactModal(false);
  //   console.log(`FIX IT FELIX, contactModal:${contactModal}`);
  // };
  const handleShow = () => setModal(true);
  const handleSelect = (selectedIndex, e) => {
    setCarouselImageIdInPage(selectedIndex);
  };

  // useEffect(() => {
  //   setContactModal(true);
  // }, [setContactModal]);


  const callbackAfterContactFormClose = (close) => {
    setTest(close)
    setContactModal(close);
    // console.log(`inside callbackAfterContactFormClose contactModal value: ${contactModal}`);

    return (
      <>
      {contactModal}
      {console.log(`inside callbackAfterContactFormClose test value: ${test}`)}
      </>
    );
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

  const ContactMeModal = () => {
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
          {/* <Link id="aboutButton" to="/resume">
            CONTACT ME
          </Link> */}
          <div id="aboutButton" onClick={ContactMeModal}>
            CONTACT ME
            </div>
               
          
          {contactModal && (
          <ContactFormModal callbackAfterContactFormClose={callbackAfterContactFormClose}/>
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
        <div
          id="photoCollectionParent"
          // onClick={() => {
          // setImageCarouselInPage(true);
          // // setImageCarouselInPage(imageCarouselInPage);
          // setCarouselImageIdInPage(carouselImageIdInPage);

          // }}
        >
          <PhotoCollectionProvider>
            <PhotoCollectionList
              // carouselImageIdInList={carouselImageIdInPage}
              callbackAfterImagePress={callbackAfterImagePress}
              // startImageCarousel={startImageCarousel}
              // imageCarouselInList={imageCarouselInPage}
              // modalCarouselShowInList={modalCarouselShowInPage}
              // modalHandleClose={modalHandleClose}
            />
          </PhotoCollectionProvider>
          {/* {console.log(`${carouselImageIdInPage}`)} */}
        </div>
      </div>

      {/* <PhotoCollectionList  */}
      {/* // value={[
        //   imageCarousel,
        //   index2,
        //   handleSelect,
        //   imgPhotos.id,
        //   imgPhotos.name,
        //   imgPhotos.message,
        //   imgPhotos.localAddress,
        // ]}
      > */}

      {/* {imageCarouselInPage && <div>We in Here!!{carouselImageIdInPage}</div>} */}

      {modal && (
        <Modal
          show={modal}
          onHide={handleCarouselClose}
          // show={modalCarouselShowInPage}
          // onHide={modalHandleClose}
          fullscreen={true}
          id="aboutPageModal"
          // style={{ backgroundColor:"rgba(0,0,0,0.5)"}}

          // style={{ opacity:0.6}}
          // key={imgPhoto.id}
          animation={false}
          style={{ animation: closeAnimation }}
        >
          <Modal.Header
            id="aboutPageModalHeader"
          >
            <Button
              id="aboutPageModalButton"
              onClick={handleCarouselClose}
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body
            id="aboutPageModalBody"
          >
            <Carousel
              id="photoCollectionCarousel"
              activeIndex={carouselImageIdInPage}
              // activeIndex={0}
              onSelect={handleSelect}
              // variant="dark"
              variant="light"
              prevLabel={"Previous"}
              nextLabel={"Next"}
              interval={null}
              fade={true}
              // indicatorLabels={["fancy","facts"]}
            >
              {/* // image 1  */}
              <Carousel.Item
                className="carousel-item"
              >
                <img
                  className="imgCarousel"
                  // className="d-block w-100 "
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
                  // className="d-block w-100"
                  src={require("../assets/img/tomWedding.jpg")}
                  alt="Second slide"
                />
                <Carousel.Caption className="imgCarouselCaption">
                  <h3
                    id="carouselH3"
                  >
                    @ Tom's Wedding
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>

              {/* // image 3            */}
              <Carousel.Item className="carousel-item">
                <img
                  // fluid='true'
                  // thumbnail='true'
                  className="imgCarousel"
                  // className="d-block w-100"
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
                  // className="d-block w-100 "
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
                  // className="d-block w-100"
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
                  // fluid='true'
                  // thumbnail='true'
                  className="imgCarousel"
                  // className="d-block w-100"
                  src={require("../assets/img/Screenshot 2022-06-23 at 00-09-24 Y.png")}
                  alt="Sixth slide"
                  // style={{height:"100vh"}}
                />
                <Carousel.Caption className="imgCarouselCaption">
                  <h3 id="carouselH3">Ramen, Ramen, Ramen </h3>
                </Carousel.Caption>
              </Carousel.Item>

              {/* image 1  */}
              {/* <Carousel.Item> */}
              {/* importing context through sibling component of PhotoCollectionList */}
              {/* <PhotoCollectionProvider>
                <CarouselPhotos/>
              </PhotoCollectionProvider> */}

              {/* using context directly in aboutPage */}
              {/* {imgPhotos.map((imgPhoto) => {
                return (
                  <img
                    key={imgPhoto.id}
                    className="PhotoCollection"
                    alt={imgPhoto.name}
                    src={imgPhoto.localAddress}
                  />
                );
              })} */}

              {/* <img
                className="imgCarousel"
                // className="d-block w-100 "
                src={require("../assets/img/aria.jpg")}
                // client\src\assets\img\aria.jpg
                // client\src\pages\aboutPage.jsx
                alt="First slide"
              />
              <div>{console.log(carouselImageIdInPage)}</div>
              <div>Here sits this imageId:{carouselImageIdInPage}</div>
              <Carousel.Caption>
                <h3 id="carouselH3">Low Def</h3>
                
              </Carousel.Caption> */}
              {/* </Carousel.Item> */}
              {/* <Carousel.Item key={imgPhotos.id} className="carousel-item">
              <img
                className="imgCarousel"
                // className="justify-content-center"
                // className="d-block w-100"
                src={imgPhotos.localAddress}
                alt={imgPhotos.name}
              /> */}

              {/* <Carousel.Caption>
                <h3 id="carouselH3">{imgPhotos.message}</h3>
                <p> </p>
              </Carousel.Caption> */}

              {/* </Carousel.Item> */}
            </Carousel>
          </Modal.Body>
        </Modal>
      )}
    </motion.div>
  );
};

export default AboutPage;
