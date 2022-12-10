import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { name, email, phone, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending");
    const { name, email, phone, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3001/contact", {
      //update address.....?????****
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(details),
      //come back to
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
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
    <div className="contactContainer">
      <div className="contactDiv">
        <div className="contactInfo">
          <h1>Contact Me</h1>
          <p>
            I look forward to hearing from you. Please use the method most
            comfortable for you. I can be reached by phone at 770-598-9675,
            email at cward@beyondeagleswings, this form, or through my{" "}
            <a
              href="https://www.facebook.com/beyondeagleswings"
              target="_blank"
              style={{
                color: "inherit",
              }}
            >
              Facebook
            </a>{" "}
            page.
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
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="formEmail">
              {/* <label htmlFor="email">Email address:</label> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="formPhone">
              {/* <label htmlFor="phone-input">Phone number:</label> */}
              <input
                type="phone-input"
                name="phone"
                placeholder="Phone Number"
                value={phone}
                onChange={handleChange}
              />
            </div>
            <div className="formMessage">
              {/* <label htmlFor="message">Message:</label> */}
              <textarea
                name="message"
                rows="5"
                placeholder="Include a message..."
                value={message}
                onChange={handleChange}
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
    </div>
  );
}

export default ContactPage;
