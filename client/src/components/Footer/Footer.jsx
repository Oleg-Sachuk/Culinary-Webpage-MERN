import { NavLink } from 'react-router-dom';
import style from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import {Col, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className={style.pageFooter}>
            <div className="container-fluid">
                <Row className={style.rowStyle}>
                    <Col><h5 className={style.font}><b>Find us</b></h5></Col>
                </Row>
                <Row className={style.bottomrowStyle}>
                    <Col md={'auto'}>
                        <NavLink to="https://www.facebook.com/sachuk.oleg/" className={style.faFacebook}>
                        <FontAwesomeIcon icon={faFacebook} />
                        </NavLink>
                    </Col>
                    <Col md={'auto'}>
                        <NavLink to="#" className={style.faTwitter}>
                        <FontAwesomeIcon icon={faTwitter} />
                        </NavLink>
                    </Col>
                    <Col md={'auto'}>
                        <NavLink to="#" className={style.faInstagram}>
                        <FontAwesomeIcon icon={faInstagram} />
                        </NavLink>
                    </Col>
                </Row>
            </div>

            <hr />
            <div className="footer-copyright text-center py-1 color-me"><b>©2021 Oleg Sachuk</b></div>
        </footer>
    )
}

export default Footer;