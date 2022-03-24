import React from 'react'
import {BsTelegram, BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.youtube.com/" target='blank'><BsTelegram /></a>
        <a href="https://www.youtube.com/" target='blank'><BsGithub /></a>
        <a href="https://www.youtube.com/" target='blank'><CgMail /></a>
    </div>
  )
}

export default HeaderSocials