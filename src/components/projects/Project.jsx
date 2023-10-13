import React from 'react'

const Project = (props) => {
  return (
    <div className='project__item'>
        <img className='project__image' src={props.image} alt=''/>
        <p className='project__name'>{props.name}</p>
        <i className={props.icon}></i>
        <span className={props.category}></span>
    </div>
  )
}

export default Project