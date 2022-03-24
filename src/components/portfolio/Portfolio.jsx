import React from "react";
import "./portfolio.scss";
import PortfolioWebp_1 from "./../../assets/portfolio1.webp";
import PortfolioJpg_1 from "./../../assets/portfolio1.jpg";
import PortfolioWebp_2 from "./../../assets/portfolio2.webp";
import PortfolioJpg_2 from "./../../assets/portfolio2.jpg";
import PortfolioWebp_3 from "./../../assets/portfolio3.webp";
import PortfolioJpg_3 from "./../../assets/portfolio3.jpg";
import PortfolioWebp_4 from "./../../assets/portfolio4.webp";
import PortfolioJpg_4 from "./../../assets/portfolio4.jpg";
import PortfolioWebp_5 from "./../../assets/portfolio5.webp";
import PortfolioJpg_5 from "./../../assets/portfolio5.png";
import PortfolioWebp_6 from "./../../assets/portfolio6.webp";
import PortfolioJpg_6 from "./../../assets/portfolio6.jpg";


const data = [
    {
        id: 1,
        title: 'Work 1',
        github: 'https://github.com/VladislavPetruk',
        demo: 'https://humster.online/',
        imgJpg: PortfolioJpg_1,
        imgWebp: PortfolioWebp_1
    },
    {
        id: 2,
        title: 'Work 2',
        github: 'https://github.com/VladislavPetruk',
        demo: 'https://humster.online/',
        imgJpg: PortfolioJpg_2,
        imgWebp: PortfolioWebp_2
    },
    {
        id: 3,
        title: 'Work 3',
        github: 'https://github.com/VladislavPetruk',
        demo: 'https://humster.online/',
        imgJpg: PortfolioJpg_3,
        imgWebp: PortfolioWebp_3
    },
    {
        id: 4,
        title: 'Work 4',
        github: 'https://github.com/VladislavPetruk',
        demo: 'https://humster.online/',
        imgJpg: PortfolioJpg_4,
        imgWebp: PortfolioWebp_4
    },
    {
        id: 5,
        title: 'Work 5',
        github: 'https://github.com/VladislavPetruk',
        demo: 'https://humster.online/',
        imgJpg: PortfolioJpg_5,
        imgWebp: PortfolioWebp_5
    },
    {
        id: 6,
        title: 'Work 6',
        github: 'https://github.com/VladislavPetruk',
        demo: 'https://humster.online/',
        imgJpg: PortfolioJpg_6,
        imgWebp: PortfolioWebp_6
    }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Recens Work</h2>
      <h3>Portfolio</h3>
      <div className="container portfolio_container">
        {data.map((item) => (
            <article className="portfolio_item" key={item.id}>
            <div className="portfolio_item_img">
              <picture>
                <source srcSet={item.imgWebp} type="image/webp" />
                <img src={item.imgJpg} alt={item.title} width={328} height={246} />
              </picture>
            </div>
            <h4>{item.title}</h4>
            <div className="portfolio_btns">
              <a href={item.github} className="btn" target="blank">
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="blank"
              >
                See work
              </a>
            </div>
          </article>
        ))}
        
      </div>
    </section>
  );
};

export default Portfolio;
