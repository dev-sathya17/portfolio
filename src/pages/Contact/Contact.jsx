import { IoSend } from "react-icons/io5";
import "./Contact.css";
import { useState } from "react";
import service from "../../services/service";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    service
      .sendMail(formData)
      .then(({ status, message }) => {
        if (status === 200) {
          alert(message);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch((err) => {
        alert("Failed to send message. Please try again later.");
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="title" id="contact" name="contact">
        Contact Me
      </h1>
      <section className="d-flex align-items-center justify-content-center flex-column">
        <div className="form d-flex justify-content-center align-items-center flex-column gap-5">
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name:"
              id="name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input"
              placeholder="Enter an email:"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              className="input"
              placeholder="Send a message:"
              id="message"
              rows={5}
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            className="submit-btn d-flex align-items-center justify-content-center gap-1"
            onClick={handleSubmit}
          >
            <span>Send</span>
            <span>
              <IoSend className="send-icon" />
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;
