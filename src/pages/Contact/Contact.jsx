import { IoSend } from "react-icons/io5";
import "./Contact.css";
const Contact = () => {
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
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input"
              placeholder="Enter an email:"
              id="email"
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">Message:</label>

            <textarea
              className="input"
              placeholder="Send a message:"
              id="message"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="submit-btn d-flex align-items-center justify-content-center gap-1"
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
