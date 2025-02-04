import React from "react";
import './About.css';
import Header from "./assets/components/Header";
import anna from './assets/media/images/anna.jpg'
import AboutTag from "./assets/components/AboutTag";

const About = () => {
    return (
        <>
            <div id="main" className='main section'>
                <div>
                    <Header />
                </div>
                <div className="about-container">
                    <div>
                        <div className="about-image-container">
                            <img alt="anna" className="about-image" src={anna} />
                        </div>
                        <div className="about-hello">
                            hello!
                        </div>
                    </div>
                    <div>
                        <div className="about-text">
                            i'm anna! a graphic designer based in são paulo, brazil<br />
                            who's all about creating bold, eye-catching, and meaningful designs<br />
                            whether it's branding, social media, UX/UI, or print, my goal is always<br />
                            turning ideas into visuals that actually connect with people<br />
                            <br />
                            a mix of creativity + strategy, making sure every design not only looks<br />
                            good but also serves a purpose. i'm always exploring new trends<br />
                            experimenting with fresh concepts, and pushing creative boundaries
                        </div>
                        <div>
                            <div className="about-tags">
                                <AboutTag name="creativity" />
                                <AboutTag name="communication" />
                            </div>
                            <div className="about-tags">
                                <AboutTag name="problem-solving" />
                                <AboutTag name="adaptability" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;