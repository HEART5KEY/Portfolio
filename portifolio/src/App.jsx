import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './assets/components/Header'
import StrengthCard from './assets/components/StrengthCard'

function App() {
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
          <StrengthCard id="01" title="branding" description="from logos and colors to fonts and styles, making brands look cohesive, professional, and fun to engage with" />
          <StrengthCard id="02" title="illustration" description="from logos and colors to fonts and styles, making brands look cohesive, professional, and fun to engage with" />
          <StrengthCard id="03" title="web design" description="from logos and colors to fonts and styles, making brands look cohesive, professional, and fun to engage with" />
          <StrengthCard id="04" title="social media" description="from logos and colors to fonts and styles, making brands look cohesive, professional, and fun to engage with" />
        </div>
      </div>
    </>
  )
}

export default App
