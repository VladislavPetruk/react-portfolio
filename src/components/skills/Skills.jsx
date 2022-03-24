import React from "react";
import "./skills.scss";
import {
  AiFillHtml5,
  AiFillGithub,
  AiOutlineAntDesign,
  AiFillChrome,
} from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiWordpress } from "react-icons/di";
import { FaFirefoxBrowser } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";

const mainSkills = [
  {
    id: 1,
    skill: "HTML",
    level: "Experienced",
    icon: <AiFillHtml5 />,
  },
  {
    id: 2,
    skill: "Css",
    level: "Experienced",
    icon: <DiCss3 />,
  },
  {
    id: 3,
    skill: "Javascript",
    level: "Medium level",
    icon: <DiJavascript1 />,
  },
  {
    id: 4,
    skill: "React",
    level: "Beginner",
    icon: <DiReact />,
  },
  {
    id: 5,
    skill: "Git, Github",
    level: "Medium level",
    icon: <AiFillGithub />,
  },
  {
    id: 6,
    skill: "Wordpress",
    level: "Medium level",
    icon: <DiWordpress />,
  },
];

const addSkills = [
  {
    id: 1,
    skill: "Responsive Design",
    level: "Experienced",
    icon: <AiOutlineAntDesign />,
  },
  {
    id: 2,
    skill: "Cross-Browser Development",
    level: "Experienced",
    icon: <FaFirefoxBrowser />,
  },
  {
    id: 3,
    skill: "Chrome DevTools",
    level: "Experienced",
    icon: <AiFillChrome />,
  },
  {
    id: 4,
    skill: "CSS Preprocessors",
    level: "Medium level",
    icon: <DiCss3 />,
  },
  {
    id: 5,
    skill: "Web Performance and Quality",
    level: "Medium level",
    icon: <GiSpiderWeb />,
  },
  {
    id: 6,
    skill: "Web Performance and Quality",
    level: "Medium level",
    icon: <FiPackage />,
  },
];
const Skills = () => {
  return (
    <section id="skills">
      <h2>What Skills I have</h2>
      <h3>My Experience</h3>
      <div className="container skills_container">
        <div className="skills_frontend">
          <h4>Frontend Skills</h4>
          <div className="skills_info">
            {mainSkills.map((item) => (
              <article className="skills_item" key={item.id}>
                {item.icon}
                <div>
                  <span>{item.skill}</span>
                  <small>{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="skills_backend">
          <h4>Additional Skills</h4>
          <div className="skills_info">
            {addSkills.map((item) => (
              <article className="skills_item" key={item.id}>
                {item.icon}
                <div>
                  <span>{item.skill}</span>
                  <small>{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
