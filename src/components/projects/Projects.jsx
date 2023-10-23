import React, { useState } from 'react'
import './projects.css'
import Project from './Project'
import Data from './Data'


const Projects = () => {
    const [category, setCategory] = useState(true);
  return (
    <section id='projects' className='projects section'>
        <div className='project__container'>
            <h3 className='project__categories'>Kategorie</h3>
            <div className="project__buttons">
                <button onClick={() => setCategory(true)} className='project__button'>Pokaż wszystkie </button>
                <button onClick={() => setCategory('website')} className='project__button'>Strony internetowe </button>
                <button onClick={() => setCategory('application')} className='project__button'>Aplikacje w języku C# </button>
                <i onClick={() => setCategory(true)} class="bi small_device bi-folder"></i>
                <i onClick={() => setCategory('website')} className='bi small_device bi-browser-chrome'></i>
                <i onClick={() => setCategory('application')} className='bi small_device bi-code-slash'></i>
            </div>
            <div className='project__list grid'>
                {Data.map((val, id) => {
                    if (category === true) {
                        return (
                            <Project key={id} icon={val.icon} name={val.name} image={val.image} category={val.category} showCategory={category} site={val.site}/>
                        )
                    }
                    else if (category === 'website' && category === val.showCategory) {
                        return (
                            <Project key={id} icon={val.icon} name={val.name} image={val.image} category={val.category} showCategory={category} site={val.site}/>
                        )
                    }
                    else if (category === 'application' && category === val.showCategory) {
                        return (
                            <Project key={id} icon={val.icon} name={val.name} image={val.image} category={val.category} showCategory={category} site={val.site}/>
                        )
                    }
                })}
            </div>
        </div>
    </section>
  )
}

export default Projects