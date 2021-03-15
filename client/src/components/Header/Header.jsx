import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = (props) => {
    return (
        <header classNameName={style.appHeader}>
            <nav className="navbar navbar-default border-bottom">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink  to="/" className="navbar-brand active">Home Cousine</NavLink >
                    </div>

                    <div>
                        <ul className="nav navbar-nav">
                            <li><NavLink to="#"></NavLink></li>
                            <li><NavLink to="/">About Us</NavLink></li>
                            <li><NavLink to="#">FAQ</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;