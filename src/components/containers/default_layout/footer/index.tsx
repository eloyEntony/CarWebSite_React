// import './footer.css';
import SteeringLine from 'remixicon-react/SteeringLineIcon';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import TwitterLineIcon from 'remixicon-react/TwitterLineIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer section">

                <div className="shape shape__big"></div>
                <div className="shape shape__small"></div>

                <div className="footer__container container grid">
                    <div className="footer__content">
                        <Link to="#" className="footer__logo">
                            <SteeringLine /> Elecar
                        </Link>
                        <p className="footer__description">
                            We offer the best electric cars of <br />
                            the most recognized brands in <br />
                            the world.
                        </p>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Company</h3>
                        <ul className="footer__links">
                            <li>
                                <Link to="#" className="footer__link">About</Link>
                            </li>
                            <li>
                                <Link to="#" className="footer__link">Cars</Link>
                            </li>
                            <li>
                                <Link to="#" className="footer__link">History</Link>
                            </li>
                            <li>
                                <Link to="#" className="footer__link">Shop</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Information</h3>
                        <ul className="footer__links">
                            <li>
                                <Link to="#" className="footer__link">Request a quote</Link>
                            </li>
                            <li>
                                <Link to="#" className="footer__link">Find a dealer</Link>
                            </li>
                            <li>
                                <Link to="#" className="footer__link">Contact us</Link>
                            </li>
                            <li>
                                <Link to="#" className="footer__link">Services</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Follow us</h3>
                        <ul className="footer__social">
                            <a href="https://www.facebook.com/" target="_blank" className="footer__social-link" rel="noreferrer">
                                <FacebookFillIcon />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" className="footer__social-link" rel="noreferrer">
                                <InstagramLineIcon />
                            </a>
                            <a href="https://twitter.com/" target="_blank" className="footer__social-link" rel="noreferrer">
                                <TwitterLineIcon />
                            </a>
                        </ul>
                    </div>

                </div>

                <span className="footer__copy">&#169; Bedimcode. All rigths reserved</span>
            </footer>
        </>
    );
};

export default Footer;