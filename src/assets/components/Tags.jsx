import React from "react";
import WorkTag from './WorkTag'

const Tags = () => {
    return (        
        <div className='tags'>
          <WorkTag name="personal" />
          <WorkTag name="work" />
        </div>
    )
};

export default Tags;