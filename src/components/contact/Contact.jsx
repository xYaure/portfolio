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
          <p className="contact__details">Nie lubisz formularzy? Napisz do mnie na e-mail. 👋</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input required type="text" name='from_name' className="contact__form-input"  placeholder='Wprowadź swoje imię'/>
            </div>

            <div className="contact__form-div">
              <input required type="email" name='user_email' className="contact__form-input"  placeholder='Wprowadź swój e-mail'/>
            </div>
          </div>

            <div className="contact__form-div">
              <input required type="text" name='subject' className="contact__form-input"  placeholder='Wprowadź swój temat e-maila'/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea required cols="30" name='message' rows="10" className='contact__form-input' placeholder='Napisz swoją wiadomość do mnie'></textarea>
            </div>

            <button type='submit' className='btn'>Wyślij wiadomość</button>
        </form>
      </div>
    </section>
  )
}

export default Contact