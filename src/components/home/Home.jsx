import React from 'react'
import './home.css'
import Me from "../../assets/avatar.svg"
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="Me" className="home__img" />
        <h1 className="home__name">Sebastian Kłak</h1>
        <span className="home__education">Cześć, tworzę strony internetowe i wiele innych</span>

        <HeaderSocials />

        <a href="" className="btn">Zatrudnij mnie</a>
        
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home