import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gyz9c2h', 'template_ua8ggk8', form.current, {
        publicKey: 'HFqcXCYg5T5jY4tNU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };


  return (
    <section id='contact'>
      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>experienceforlife30@gmail.com</h5>
          <a href="mailto:experienceforlife30@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine />
          <h4>Messenger</h4>
          <h5>ForHelpDesk</h5>
          <a href="mailto:for79451@gmail.com">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <h5>+919163717069</h5>
          <a href="https://api.whatsapp.com/send?phone=+919163717069">Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact