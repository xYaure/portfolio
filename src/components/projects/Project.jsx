import React, { useState } from 'react'

const Project = (props) => {
  return (
    <div className='project__item'>
        <img className='project__image' src={props.image} alt=''/>
        <div className='project__data'>
          <p className='project__name'>{props.name}</p>
          <a className='project__link' target='_blank' href={props.site}>Sprawdź</a>
        </div>
        <i className={props.icon}></i>
        <span className={props.category} value={props.showCategory}></span>
    </div>
  )
}

export default Project