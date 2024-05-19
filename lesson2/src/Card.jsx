import React from 'react'
import profile from '../public/profile1.jpeg'

const Card = () => {
  return (
    <div className='card'>
             <img  src={profile}  alt='profile picture' className='card-img'  />
            
      <h1 className=' card-title '>Halwo </h1>
      <p className='card-text'>Full-stack developer <br /> FrontEnd  <br />backEnd react javascript </p>
    </div>
  )
}

export default Card