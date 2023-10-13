import React from 'react'
import './projects.css'
import Project from './Project'
import Data from './Data'


const Projects = () => {
  return (
    <section id='projects' className='projects section '>
        <div className='project__container'>
            <div className='project__tittle'>
                <h2 className="section__tittle">Projekty</h2>
            </div>
            <div className='project__list grid'>
                {Data.map((val, id) => {
                    return (
                        <Project key={id} icon={val.icon} name={val.name} image={val.image} category={val.category}/>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects