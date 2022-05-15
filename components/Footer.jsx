import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Sahil Negi All Rights reserved
        <p >
          <a href="https://www.instagram.com/clumsy.potatoo/?hl=en">clumsy.potaoo</a>
        </p>
      </p>
      <p className='icons'>
        <AiFillInstagram  />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer