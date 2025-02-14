import React from "react";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
  
    return (
        <div className="header-container">
            <div className="name">
                <span onClick={() => {navigate('/Portfolio/')}}>anna</span>
            </div>
            <div className="options">
                <span className="option" onClick={() => {navigate('/Portfolio/About')}}>about me</span>
                <span className="option" onClick={() => {navigate('/Portfolio/Works')}}>works</span>
                <span className="option" onClick={() => {navigate('/Portfolio/Contact')}}>contact me</span>
            </div>
        </div>
    )
};

export default Header;