import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


function Header(props) {
    return (

        <header className="header bg-info">
            <a href="https://github.com/TristanLibeau" target="_blank"> <h1 className="text-white">Tristan Libeau </h1></a>
        </header>

    );
}

export default Header;