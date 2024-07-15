import './contact.css';
import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import contact data
import { contactLinks } from '../../data/Links/contactLinks';
import { contact } from '../../data/Texts/Contacts/contactData';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_9t1jati',
        'template_lspheld',
        formRef.current,
        'vgl13mOPDDcS2GizB'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thanks, I'll reply ASAP :)", {
            position: "top-center",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Oops! Something went wrong.", {
            position: "top-center",
          });
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        " Feel free to connect with me. I will respond to your messages ASAP. "
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">

        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>{contact.email}</h5>
            <a href={contactLinks.email}>Send a mail</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>{contact.messenger}</h5>
            <a href={contactLinks.messenger}>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Phone / WhatsApp</h4>
            <h5>{contact.whatsapp}</h5>
            <a href={contactLinks.whatsApp}>Send a message</a>
          </article>

        </div>

        
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
