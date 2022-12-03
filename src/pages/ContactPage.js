import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, phone, message } = formState;

  const handleSubmit = (event) => {
    event.preventDefault();
    //come back to
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        let name = event.target.name;
        console.log(name + "name");
        let firstLetter = name.split("", 1);
        let newName = firstLetter
          .toString()
          .toUpperCase()
          .concat(name.slice(1));

        // console.log(firstLetter + "1letter");
        // let newName = firstLetter.concat(name);
        // console.log(newName + "newname");
        setErrorMessage(`${newName} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  };

  return (
    <div>
      <div className="contactDiv">
        <h1>Contact Me</h1>
        <p>
          I look forward to hearing from you. Please use the method most
          comfortable for you. I can be reached by phone at 770-598-9675, email
          at cward@beyondeagleswings, the form below, or through my{" "}
          <a href="https://www.facebook.com/beyondeagleswings" target="_blank">
            Facebook page
          </a>
          .
        </p>
      </div>
      <div className="formDiv">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="formName">
            {/* <label htmlFor="name">Name:</label> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="formEmail">
            {/* <label htmlFor="email">Email address:</label> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="formPhone">
            {/* <label htmlFor="phone-input">Phone number:</label> */}
            <input
              type="phone-input"
              name="phone"
              placeholder="Phone Number"
              defaultValue={phone}
              onBlur={handleChange}
            />
          </div>
          <div className="formMessage">
            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              name="message"
              rows="5"
              placeholder="Include a message..."
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className="formSubmitDiv">
            <button type="submit" className="formSubmitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
