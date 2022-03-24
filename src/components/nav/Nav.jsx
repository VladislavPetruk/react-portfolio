import React from 'react'
import './nav.scss'
import {AiFillHome, AiOutlineUser, AiFillBook, AiOutlineFundProjectionScreen, AiFillContacts} from 'react-icons/ai'
import {GiSkills} from 'react-icons/gi'
import {MdPreview} from 'react-icons/md'

const Nav = () => {

  const [activeNav, setActiveNav] = React.useState('#');

  return (
    <nav>
      <a href="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><AiFillBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GiSkills /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href="#reviews" onClick={() => setActiveNav('#reviews')} className={activeNav === '#reviews' ? 'active' : ''}><MdPreview /></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><AiFillContacts /></a>
    </nav>
  )
}

export default Nav