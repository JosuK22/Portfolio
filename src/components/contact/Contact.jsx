import './contact.css';
import React, { useRef} from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { contactLinks } from '../../links/contactLinks';

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
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thanks, I'll reply ASAP :)");
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
            <h5>josephkanoj@gmail.com</h5>
            <a href={contactLinks.email}>Send a mail</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Joseph K Anoj</h5>
            <a href={contactLinks.messenger}>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Phone / WhatsApp</h4>
            <h5>+91 9744788125</h5>
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
    </section>
  );
};

export default Contact;
