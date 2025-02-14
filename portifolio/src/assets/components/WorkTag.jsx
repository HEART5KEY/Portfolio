import React from "react";

const WorkTag = ({ name }) => {
    return (
        <div className={`work-tag tag`}>
            #{name}
        </div>
    );
};

export default WorkTag;