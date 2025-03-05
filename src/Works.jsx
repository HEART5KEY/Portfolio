import React, { useState, useEffect } from "react";
import Header from "./assets/components/Header";
import './Works.css';
import { projects } from './works.json';
import Project from "./assets/components/Project";

const Works = () => {
    const [selected, setSelected] = useState(false);

    const handleSelection = (personal) => {
        let choice = document.querySelectorAll('.category'),
            background = document.querySelector('.category-background'),
            projectsContainer = document.querySelector('.projects'),
            back = document.querySelectorAll('.back-arrow'),
            header = document.querySelector('.header-grid');

        background.style.opacity = '1';
        if (selected) {
            if (personal) {
                back[0].style.display = 'none';
                choice[0].style.left = '20%';
                choice[0].style.background = 'rgba(255, 255, 255, .1)';
                choice[0].style.backdropFilter = 'blur(40px)';
                choice[1].style.right = '20%';

                let projects = document.querySelector('.projects-personal');
                
                projectsContainer.style.right = '0';
                projects.style.display = 'none';
                setTimeout(() => {
                    projectsContainer.style.right = 'unset';
                }, 1);
            }
            else {
                back[1].style.display = 'none';
                choice[0].style.left = '20%';
                choice[1].style.right = '20%';
                choice[1].style.background = 'rgba(255, 255, 255, .1)';
                choice[1].style.backdropFilter = 'blur(40px)';

                let projects = document.querySelector('.projects-work');

                projectsContainer.style.right = '0';
                projects.style.display = 'none';
                projects.parentElement.style.direction = 'ltr';
                setTimeout(() => {
                    projectsContainer.style.right = 'unset';
                }, 1);
            }
            
            header.style.height = 'auto';
        }
        else {
            background.style.opacity = '0';

            if (personal) {
                back[0].style.display = 'inline';
                choice[0].style.left = 'calc(90% - 250px)';
                choice[0].style.background = 'transparent';
                choice[0].style.backdropFilter = 'none';
                choice[1].style.right = '-1000px';

                let projects = document.querySelector('.projects-personal');
                
                projectsContainer.style.right = '200%';
                projects.style.display = 'block';
                projects.parentElement.style.direction = 'ltr';
                setTimeout(() => {
                    projectsContainer.style.right = '20%';
                }, 1);
            }
            else {
                back[1].style.display = 'inline';
                choice[0].style.left = '-1000px';
                choice[1].style.right = 'calc(90% - 250px)';
                choice[1].style.background = 'transparent';
                choice[1].style.backdropFilter = 'none';

                let projects = document.querySelector('.projects-work');

                projectsContainer.style.right = '-100%';
                projects.style.display = 'block';
                projects.parentElement.style.direction = 'rtl';
                setTimeout(() => {
                    projectsContainer.style.right = '0';
                }, 1);

            }

            header.style.height = '0';
        }

        setSelected(!selected);
    };    
    
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    useEffect(() => {
        if (!params.personal)
            return

        handleSelection(params.personal === 'true');
        setTimeout(() => {
            document.getElementById(params.id).scrollIntoView({behavior: 'smooth'});
        }, 700);
    }, []);

    return (
        <>
            <div className="category-background"></div>
            <div className="header-grid">
                <Header />
            </div>
            <div className="category-container">
                <div onClick={() => {handleSelection(true)}} className="category">
                    <span>personal</span>
                    <span className="back-arrow">&nbsp;›</span>
                </div>
                <div onClick={() => {handleSelection(false)}} className="category">
                    <span className="back-arrow">‹&nbsp;</span>
                    <span>work</span>
                </div>
                <div className="projects">
                    <div className="projects-personal">
                        {projects.filter((project) => {return project.personal}).map((proj) => {
                            return (
                                <Project media={proj.media} social={proj.social} title={proj.title} id={proj.key} />
                            )
                        })}     
                    </div>
                    <div className="projects-work">
                        {projects.filter((project) => {return !project.personal}).map((proj) => {
                            return (
                                <Project media={proj.media} social={proj.social} title={proj.title} id={proj.key} />
                            )
                        })}                     
                    </div>
                </div>
            </div>
        </>
    )
};

export default Works;