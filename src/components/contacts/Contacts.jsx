import React from 'react';
import './contacts.scss';
import {AiOutlineMail} from 'react-icons/ai';
import {FaTelegramPlane, FaViber} from 'react-icons/fa';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_if7muj9', 'template_el2pwpr', form.current, 'qcj_51Ez3bBFIsXnD')
    
    e.target.reset()
  };



  return (
    <section id='contacts'>
      <h2>Get In Touch</h2>
      <h3>Contact me</h3>
      <div className="container contacts_container">
        <div className="contacts_items">
          <article className='contacts_item'>
            <AiOutlineMail />
            <h4>Email</h4>
            <span>vladiislav.petruk@gmail.com</span>
            <a href="mailto:vladiislav.petruk@gmail.com">Send a message</a>
          </article>
          <article className='contacts_item'>
            <FaTelegramPlane />
            <h4>Telegram</h4>
            <span>Vladyslav Petruk</span>
            <a href="https://t.me/Vlad_petruk">Send a message</a>
          </article>
          <article className='contacts_item'>
            <FaViber />
            <h4>Viber</h4>
            <span>+380678805105</span>
            <a href="viber://chat?number=%2B380678805105">Send a message</a>
          </article>
        </div>
        <form ref={form} className='contacts_form' onSubmit={sendEmail}>
          <input type="text" name='name' className='input contacts_input' placeholder='Name' required/>
          <input type="email" name='email' className='input contacts_input' placeholder='Email' required/>
          <textarea name="message" className='contacts_filed' rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts