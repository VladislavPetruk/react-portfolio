import React from "react";
import "./about.scss";
import MainPhotoWebp from "./../../assets/me-about.webp";
import MainPhotoJpg from "./../../assets/me-about.jpg";
import { BsAwardFill, BsFillFolderFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h2>Get to know</h2>
      <h3>About me</h3>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <picture>
              <source srcSet={MainPhotoWebp} type="image/webp" />
              <img src={MainPhotoJpg} alt="My_photo" width={472} height={472} />
            </picture>
          </div>
        </div>
        <div className="about_info">
          <div className="about_cards">
            <article className="about_card">
              <BsAwardFill className="about_icon" />
              <h4>Expeirence</h4>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <BsFillFolderFill className="about_icon" />
              <h4>Projects</h4>
              <small>10+ Completed</small>
            </article>
            <article className="about_card">
              <FaUser className="about_icon" />
              <h4>Clients</h4>
              <small>20+ Worldwibe</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            possimus minus, libero aspernatur nemo sed quae, voluptatem
            consequatur, dolorem odit deleniti facere obcaecati nam. Sint facere
            ad consectetur veniam aut!
          </p>
          <a href="#contacts" className="btn btn-primary">
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
