import React from 'react'
import './about.css'
import About_img from "../../assets/avatar.svg"

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__tittle">O Mnie</h2>

      <div className="about__container grid">
        <img src={About_img} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Cześć nazywam się Sebastian, jestem z Polski i tworzę strony internetowe oraz aplikacje w języku C#.</p>
            <a href="#home" className="btn">Pobierz moje CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React</h3>
                <span className="skills__number ">35%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill_react"></span>
              </div>

            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C#</h3>
                <span className="skills__number ">45%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill_c-sharp"></span>
              </div>

            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS</h3>
                <span className="skills__number ">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage skill_css"></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About