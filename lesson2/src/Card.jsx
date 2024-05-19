import React from 'react'
import profile from '../public/profile.jpg'

const Card = () => {
  return (
    <div className='card'>
             <img  src={profile}  alt='profile picture' className='card-img'  />
            
      <h1 className=' card-title '>Halwo </h1>
      <p className='card-text'>Full-stack developer FrontEnd backEnd react javascript </p>
    </div>
  )
}

export default Card