import React from 'react'

import CV from './../../assets/cv.pdf'

const Btns = () => {
  return (
    <div className='header_btns'>
        <a href={CV} className='btn' download>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Send Message</a>
    </div>
  )
}

export default Btns