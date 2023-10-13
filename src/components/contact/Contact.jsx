import React from 'react'
import './contact.css'

  const Contact = () => {

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__tittle">Kontakt</h2>
      <div className="contact__container section grid">
        <div className="contact__info">
          <h3 className="contact__title">Omówmy wszystko!</h3>
          <p className="contact__details">Nie lubisz formularzy? Napisz do mnie na e-mail. 👋</p>
        </div>

        <form className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input"  placeholder='Wprowadź swoje imię'/>
            </div>

            <div className="contact__form-div">
              <input type="email" className="contact__form-input"  placeholder='Wprowadź swój e-mail'/>
            </div>
          </div>

            <div className="contact__form-div">
              <input type="text" className="contact__form-input"  placeholder='Wprowadź swój temat e-maila'/>
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea cols="30" rows="10" className='contact__form-input' placeholder='Napisz swoją wiadomość do mnie'></textarea>
            </div>

            <button className='btn'>Wyślij wiadomość</button>
        </form>
      </div>
    </section>
  )
}

export default Contact