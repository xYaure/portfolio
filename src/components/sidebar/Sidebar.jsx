import React from 'react'
import './sidebar.css'
import Logo from "../../assets/logo1.svg";

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="logo"/>
      </a>

      <nav className="nav">

        <div className="nav__menu">
          <ul className="nav__list">

            <li className="nav__item">
              <a href="#home" className="nav__link">
              <i className="icon-home"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#about" className="nav__link">
              <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
              <i className="icon-briefcase"></i>
              </a>
            </li>


            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
              <i className="icon-layers"></i>
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 -2024.</span>
      </div>
    </aside>
  )
}

export default Sidebar