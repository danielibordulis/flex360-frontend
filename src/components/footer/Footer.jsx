import React from 'react'
import "./Footer.css"
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className='fimDaPagina'>
      <div className='icones'>
        <span className='emailFooter'><AiOutlineMail /></span>
        <BsInstagram />
        <SiGooglemaps />
      </div>
    </div>
  )
}

export default Footer
