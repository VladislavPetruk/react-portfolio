import React from 'react'
import {BsTelegram, BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.youtube.com/" target='_blank'><BsTelegram /></a>
        <a href="https://www.youtube.com/" target='_blank'><BsGithub /></a>
        <a href="https://www.youtube.com/" target='_blank'><CgMail /></a>
    </div>
  )
}

export default HeaderSocials