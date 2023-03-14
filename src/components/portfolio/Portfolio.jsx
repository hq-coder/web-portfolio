import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/browsergame.png'
import IMG2 from '../../assets/pokemonapp.png'
import IMG3 from '../../assets/uiux2.jpeg'
import IMG4 from '../../assets/uiux-3.jpeg'
import IMG5 from '../../assets/Smart home Gateway_3.jpeg'
import IMG6 from '../../assets/graph1.jpeg'
import { GoLogoGithub } from 'react-icons/go'
import { BsPlayBtnFill } from 'react-icons/bs'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Shinobi Smash Video Game',
    github: 'https://github.com/hq-coder/RPS_FIGHT_GAME',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'PokeDex App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'MERN Stack Movie Library App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='projectname'> Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='repobutton' target='_blank'><GoLogoGithub /></a>
                <a href={demo} className='repobutton' target='_blank'><BsPlayBtnFill /></a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio