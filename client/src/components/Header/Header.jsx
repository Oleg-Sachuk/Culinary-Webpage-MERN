import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';

const Header = (props) => {
    const [data, setData] = useState();
    const auth = useContext(AuthContext);
    const usercont = useContext(UserContext);


    useEffect(() => {
        if (usercont.login != null) {
            setData(usercont)
        }

    }, [data, usercont])

    return (
        <nav className="navbar navbar-expand-lg" style={{ fontSize: 'large' }}>
            <div className="container-fluid">
                <NavLink className={style.navFont} to="/">Home Cousine</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        {!auth.isAuth
                            ? <li className={style.navItem}>
                                <NavLink className={style.navFont} to="/login" exact> Unsigned <FontAwesomeIcon icon={faUser} /></NavLink>
                            </li>
                            : <li className={style.navItem}>
                                <NavLink className={style.navFont} to="/logout" exact> {usercont.login || "Signed In"} <FontAwesomeIcon icon={faUser} /></NavLink>
                            </li>
                        }
                        <hr className={style.vl} />
                        <li className={style.navItem}>
                            <NavLink className={style.navFont} to="/about"><FontAwesomeIcon icon={faStickyNote} /> About us </NavLink>
                        </li>
                        <hr className={style.vl} />
                        <li className={style.navItem}>
                            <NavLink className={style.navFont} to="/faq"><FontAwesomeIcon icon={faBook} /> FAQ </NavLink>
                        </li>
                        <hr className={style.vl} />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;