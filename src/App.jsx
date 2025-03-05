import './App.css'
import './index.css'
import Header from './assets/components/Header'
import StrengthCard from './assets/components/StrengthCard'
import { useState } from 'react'
import Tags from './assets/components/Tags'
import { projects } from './works.json'
import { getImageurl } from './methods'
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div id="main" className='main section'>
        <div>
          <Header />
        </div>
        <div className='box-container'>
          <div className='box'>
            <div className='box-main'>
              <div className='title-container'>
                <div className='subtitle'>graphic design</div>
                <div className='title'>portfolio</div>
                <div className='exclamation'>⬤&nbsp;&nbsp;2025</div>
              </div>
            </div>
            <div className='box-description'>
              dedicated to creating visually compelling and<br />strategic designs that captivate and inspire
            </div>
          </div>
        </div>
      </div>
      <div className='strengths section'>
        <div className='circles'>
          <StrengthCard id="01" title="branding" description="from logos and colors to fonts and styles, making brands look cohesive, professional, and fun to engage with." />
          <StrengthCard id="02" title="illustration" description="whether it's digital artwork, icons, or custom graphics, I love creating visuals that bring ideas to life." />
          <StrengthCard id="03" title="web design" description="creating websites that are visually appealing and intuitive for visitors." />
          <StrengthCard id="04" title="social media" description="eye-catching and engaging content. posts, stories, banners, and ads." />
        </div>
      </div>
      <div className='highlights section'>
        <Tags />
        <div className=''>
          <div className='highlights-title'>
            highlights  
          </div>  
          <div className='highlights-container'>
            {
              projects.filter((proj) => {return proj.highlight}).map((project) => {
                return (
                  <div onClick={() => {navigate(`/Portfolio/Works?personal=${project.personal}&id=${project.key}`)}} className='highlight-container'>
                    {project.media.length > 1 ? <div className='highlight-plus'>+</div> : ''}
                    <img className='highlight-thumbnail' src={getImageurl(`./assets/media/works/${project.media[0]}.jpg`)} alt='highlight-thumbnail' />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='highlights-more' onClick={() => {navigate('/Portfolio/Works')}}>see more works</div>
      </div>
    </>
  )
}

export default App;
