import React from "react";

const StrengthCard = ({ id, title, description }) => {
    return (
        <div className="strength-card">
            {id % 2 == 0 ?
                <>
                    <div className="strength-id">{id}</div>
                    <div className="right"><div className="strength-title">{title}</div></div>
                </>
                :
                <>
                    <div className="strength-title">{title}</div>
                    <div className="strength-id right">{id}</div>
                </>
            }
            <div className="strength-description">{description}</div>
        </div>
    )
};

export default StrengthCard;