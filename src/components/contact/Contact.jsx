import React from 'react'
import './contact.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'


  const Contact = () => {
      const form = useRef()

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u0qjhoj', 'template_astxytw', form.current, 'cJlfLQ_IH84Du5_1s')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      };
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__tittle">Kontakt</h2>
      <div className="contact__container section grid">
        <div className="contact__info">
          <h3 className="contact__title">Omówmy wszystko!</h3>
          <p className="contact__details">Napisz do mnie na e-mail(sebastianklak.kontakt@gmail.com) lub Instagrama: <a href="https://www.instagram.com/_se.ba.stian/" rel='noreferrer' className="home__social-link" target="_blank">
            <i className="fa-brands fa-instagram"></i>
        </a>. 👋</p>
        </div>
      </div>
    </section>
  )
}

export default Contact