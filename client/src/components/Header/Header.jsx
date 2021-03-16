import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBook, faStickyNote } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{fontSize: 'large'}}>
            <div className="container-fluid">
                <NavLink className={style.navFont} to="/">Home Cousine</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={style.navItem}>
                            <NavLink className={style.navFont} to="/about"><FontAwesomeIcon icon={faStickyNote}/> About us </NavLink>
                        </li>
                        <hr className={style.vl} />
                        <li className={style.navItem}>
                            <NavLink className={style.navFont} to="/faq"><FontAwesomeIcon icon={faBook}/> FAQ </NavLink>
                        </li>
                        <hr className={style.vl} />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;