import React, { useState } from 'react'
import './sidebar.css'
import Logo from "../../assets/logo1.svg";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="logo"/>
      </a>

      <nav className="nav">

        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i value1="home" value2="bi-house" className="bi bi-house-fill active"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#about" className="nav__link">
              <i value1="about" value2="bi-person"  className="bi bi-person"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
              <i value1="services" value2="bi-briefcase" className="bi bi-briefcase"></i>
              </a>
            </li>


            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
              <i value1="portfolio" value2="bi-layers"  className="bi bi-layers"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i value1="contact" value2="bi-chat"  className="bi bi-chat"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 -2024.</span>
      </div>
    </aside>

  <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
    <i className="icon-menu"></i>
  </div>
  </>
  )
}

export default Sidebar