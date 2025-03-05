import React from "react";

const ProjectSeparator = ({ backgroundClass, text }) => {
    return (        
        <div className={`project-separator ${backgroundClass}`}>
            {text}
        </div>
    );
};

export default ProjectSeparator;