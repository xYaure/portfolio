import React from 'react'
import './portfolio.css'
import Data from './Data'
import Card from './Card'

const Portfolio = () => {
  return (
    <section className="portfolio container section" id='portfolio'>
      <h2 className="section__tittle">Doświadczenie</h2>

      <div className="portfolio__container section grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experiance") {
              return (
                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio