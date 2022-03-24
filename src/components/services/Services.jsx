import React from 'react'
import './services.scss'
import {AiFillCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h2>What I Offer</h2>
      <h3>Services</h3>
      <div className="container services_container">
        <article className='services_item'>
          <div className="services_item_top">
            <h4>Front-end Architecture & Design</h4>
          </div>
          <ul className='services_item_list'>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='services_item'>
          <div className="services_item_top">
            <h4>Custom Frontend Web Development</h4>
          </div>
          <ul className='services_item_list'>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='services_item'>
          <div className="services_item_top">
            <h4>Single Page Apps Development</h4>
          </div>
          <ul className='services_item_list'>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className='services_item_elem'>
              <AiFillCheckCircle />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services