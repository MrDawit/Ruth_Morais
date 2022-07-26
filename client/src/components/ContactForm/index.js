
import React, { useState } from "react";
import "./style.css";
import ResultSuccess from "../ResultSuccess";
import ResultOther from "../ResultOther";

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactWay, setContactWay] = useState('');
  // const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationSuccess, setConfirmationSuccess] = useState(false);
  const [confirmationOther, setConfirmationOther] = useState(false);

  const submitRequest = async (e) => {
    e.preventDefault();
    let data = { firstName, lastName, contactWay, message };
    // console.log(data);
    const url = '/api/contact';
    const options = {
      method: 'POST',
      headers: {

        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

    };

    const response = await fetch(url, options);
    //this is a different respsonse that always shows '200' 
    //meaning it denotes only the status of communication between browser and server(not of email being sent)
    // const reportTo = await response.status;
    const report = await response.json();
    console.log(report.status);
    // console.log(reportTo);
    if (await report.status === 'SENT') {
      //changing state
      setConfirmationSuccess(true);
      setConfirmationOther(false);
      //clearing form
      setFirstName('');
      setLastName('');
      setContactWay('');
      // setSubject('');
      setMessage('');


    } else {
      //changing state
      setConfirmationOther(true);
      setConfirmationSuccess(false);
      //clearing form
      setFirstName('');
      setLastName('');
      setContactWay('');
      // setSubject('');
      setMessage('');


    };
  };

  return (
    <>
      {/* change response components to bootstrap arrangement to the right side of ContactForm */}
      { confirmationSuccess && <ResultSuccess />}
      {confirmationOther && <ResultOther />}
      <form id="contactForm" onSubmit={submitRequest}>
        {/* <div id="formTitle">Let's Connect</div> */}
        <label className="formLabel" htmlFor="firstName">Your Name *</label>
        <br />
        <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={e => setFirstName(e.target.value)}
          value={firstName} required/>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={e => setLastName(e.target.value)}
          value={lastName} required/>
          {/* <label htmlFor="firstName">First Name</label> <label htmlFor="lastName">Last Name</label> */}

        <br />
        <br />

        <label className="formLabel" htmlFor="contactWay">Your Email</label>
        <br />
        <input type="text" id="contactWay" name="contactWay"
        //  placeholder="EMAIL" 
         onChange={e => setContactWay(e.target.value)}
          value={contactWay}
          
        />
        <br />
        <br />

        {/* <label htmlFor="subject" >Subject:</label>
        <br />
        <input type="text" id="subject" name="subject" placeholder="SPECIFY THE SUBJECT" onChange={e => setSubject(e.target.value)}
          value={subject}
        />
        <br /> */}
        <label className="formLabel" htmlFor="message">Message *</label>
        <br />
        <textarea id="message" type="text" name="message" 
        // placeholder="WRITE YOUR MESSAGE (req'd)" 
        cols="40"
          onChange={e => setMessage(e.target.value)}
          value={message}
          required
        />

        <br />
        <br />

        <input id="submitBtn" type="submit" value="Submit" />
        <br /><br />
        <div><span>Email: </span>moraisruth@yahoo.com</div>
        <div id="contact_links">
          <a href="https://linkedin.com/in/ruth-morais "
            target="_blank" rel="noreferrer">
            <img className="contact_icon" alt="LinkedIn_Image" src={require("../../assets/img/icon-linkedin.png")} />
          </a>
          <br />

          <a href={"https://github.com/MrDawit"} target="_blank" rel="noreferrer">
            <img className="contact_icon" alt="Github_Image" src={require("../../assets/img/github-logo.png")} />
          </a>
        </div>
      </form>
    </>
  );
}

export default ContactForm;