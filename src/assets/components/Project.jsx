import React, { useEffect, useState } from "react";
import anna from '../../assets/media/images/anna.jpg'

const Project = ({ media, social, title, id }) => {
    const [current, setCurrent] = useState(0);
    const [carousel, setCarousel] = useState(null);

    const handleChange = (e, increase) => {
        setCarousel(e.target.parentElement.children[1]);
        if (increase)
            setCurrent((prev) => prev + 1);
        else
            setCurrent((prev) => prev - 1);
    };

    useEffect(() => {   
        if (!carousel)
            return;
        
        carousel.style.right = `${current * 65}vh`;
    }, [current]);

    return (        
        <div id={id} className={`project`}>
            <div className="project-background" style={{backgroundImage: `url(${`/Portfolio/works/${media[0]}.jpg`})`}}></div>
            <div className={`social-border social-${social}`}>
                <div className='social-header'>
                    {social === 'instagram' ?
                        <>
                            <div className="social-photo">
                                <div className="instagram-story"><img src={anna} /></div>
                            </div>
                            <span className="instagram-name">anna</span>
                        </> :
                        <>
                            <div className="twitter-profile">
                                <div className="social-photo"><img src={anna} /></div>
                                <div className="twitter-info">
                                    <p className="twitter-name">anna</p>
                                    <p className="twitter-at">@HE4RTSKEY</p>
                                </div>
                            </div>
                            <div className="twitter-open">
                                <div className="open-button" onClick={() => {window.open('https://x.com/HE4RTSKEY', '_blank').focus();}}>Open profile</div>
                            </div>
                            <div className="twitter-title">{title}</div>
                        </>
                    }
                </div>
                <div className="social-post">
                    <div className="carousel-arrow" onClick={(e) => (handleChange(e, false))} style={current === 0 ? {display: 'none'} : {display: 'flex'}}>‹</div>
                    {media.length === 1 ?
                        <img src={`/Portfolio/works/${media[0]}.jpg`} alt='highlight-thumbnail' /> :
                        <div className="social-carousel">
                            {media.map((picture) => {
                                return (
                                    <div className="carousel-image-container">
                                        <div className="carousel-image-background" style={{backgroundImage: `url(${`/Portfolio/works/${picture}.jpg`})`}}></div>
                                        <img src={`/Portfolio/works/${picture}.jpg`} alt='highlight-thumbnail' />
                                    </div>
                                )
                            })}                            
                        </div>
                    }
                    <div className="carousel-arrow" onClick={(e) => (handleChange(e, true))} style={current === media.length - 1 ? {display: 'none'} : {display: 'flex'}}>›</div>
                </div>
                <div className="social-header"></div>
            </div>
        </div>
    );
};

export default Project;