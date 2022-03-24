import React from 'react'
import './header.scss'
import Btns from './Btns'
import MainPhotoPng from './../../assets/me.png'
import MainPhotoWebp from './../../assets/me.webp'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className='header'>
      <div className='container header_container'>
        <h2>Hi, i'm</h2>
        <h1>Petruk Vladyslav</h1>
        <h3>Frontend developer</h3>
        <Btns />

        <div className='header_photo'>
          <picture>
            <source srcSet={MainPhotoWebp} type="image/webp" />
            <img src={MainPhotoPng} alt="My_photo" />
          </picture>
        </div>

        <a href="#contacts" className='header_scroll'>Scroll down</a>

        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header