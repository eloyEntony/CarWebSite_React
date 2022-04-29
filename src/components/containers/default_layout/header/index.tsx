import SteeringLine from 'remixicon-react/SteeringLineIcon';
import CloseLine from 'remixicon-react/CloseLineIcon';
import MenuIcon from 'remixicon-react/MenuLineIcon';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { Link, animateScroll as scroll } from 'react-scroll';


const Header = () => {
  const [click, setClick] = useState(false);

  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 50) setNavbar(true)
    else setNavbar(false)
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })

  return (
    <>
      <header className={classNames('header', { 'scroll-header': navbar })}>
        <nav className="nav container">
          <Link className="nav__logo" to="home">
            <SteeringLine /> Elecar
          </Link>
          <div id="nav-menu" className={classNames('nav__menu', { 'show-menu': click })}>
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  onClick={() => setClick(!click)}
                  className="nav__link"
                  activeClass="active-link"
                  to="home" spy={true}
                >Home</Link>
              </li>
              <li className="nav__item">
                <Link
                  onClick={() => setClick(!click)}
                  className="nav__link"
                  activeClass="active-link"
                  to="about" spy={true}
                >About</Link>
              </li>
              <li className="nav__item">
                <Link
                  onClick={() => setClick(!click)}
                  className="nav__link"
                  activeClass="active-link"
                  to="popular" spy={true}
                >Popular</Link>
              </li>
              <li className="nav__item">
                <Link
                  onClick={() => setClick(!click)}
                  className="nav__link"
                  activeClass="active-link"
                  to="featured" spy={true}
                >Featured</Link>
              </li>
            </ul>
            <div className="nav__close" id="nav-close" onClick={() => setClick(!click)}>
              <CloseLine />
            </div>
          </div>
          <div id="nav-toggle" onClick={() => setClick(!click)} className="nav__toggle">
            <MenuIcon />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
