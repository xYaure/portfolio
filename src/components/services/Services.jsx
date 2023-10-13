import React from 'react'
import './services.css'
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const Services = () => {
  return (
    <section className="services container" id='services'>
      <h2 className='section__tittle'>Co oferuje?</h2>
      <div className="services__container section grid">
        <div className="services__data">
          <div className="services__img">
            <img src={Image1} alt="" />
          </div>
          <div className="services__description">
            <p>Stworzę przyjazną dla oka, profesjonalną, nowoczesną oraz responsywną stronę internetową ze wszystkimi upodobaniami i wymaganiami jakie klient sobie zażyczy.</p>
          </div>
        </div>
        <div className="services__data">
          <div className="services__img">
            <img src={Image2} alt="" />
          </div>
          <div className="services__description">
            <p>Tworzę również aplikacje mobilne/desktopowe w języku C#, nie mam wysokiego doświadczenia lecz można liczyć na średnio-zaawansowane aplikacje</p>
          </div>
        </div>
        <div className="services__data">
          <div className="services__img">
            <img src={Image3} alt="" />
          </div>
          <div className="services__description">
            <p>Umiem edytować zdjęcia, poprawiać jakość, tworzyć ikony/loga na strony internetowe oraz dla aplikacji w Adobe Illustrator i Adobe Photoshop</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services