import React from "react";
import BBLogo from '../../Assets/Images/logo.png'

const Logo = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="logo">
            <a
                href="https://bryanbloomquist.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={BBLogo} alt="Bryan Bloomquist Logo" />
            </a>
            <p>&copy; {year}</p>
        </footer>
    );
};

export default Logo;
