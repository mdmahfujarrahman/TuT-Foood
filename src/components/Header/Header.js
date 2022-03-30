import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo192.png";

const Header = () => {
    return (
        <nav className="flex justify-between items-center">
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <div className="flex space-x-14">
                <Link className="text-xl" to="/">
                    Restaurant
                </Link>
                <Link className="text-xl" to="/contact">
                    Contact
                </Link>
                <Link className="text-xl" to="/about">
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Header;
