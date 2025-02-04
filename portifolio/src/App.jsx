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
          <StrengthCard id="01" title="branding" description="from logos and colors to fonts and styles, making brands look cohesive, professional, and fun to engage with." />
          <StrengthCard id="02" title="illustration" description="whether it's digital artwork, icons, or custom graphics, I love creating visuals that bring ideas to life." />
          <StrengthCard id="03" title="web design" description="creating websites that are visually appealing and intuitive for visitors." />
          <StrengthCard id="04" title="social media" description="eye-catching and engaging content. posts, stories, banners, and ads." />
        </div>
      </div>
    </>
  )
}

export default App
