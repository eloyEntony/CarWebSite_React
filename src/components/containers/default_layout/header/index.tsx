import SteeringLine from 'remixicon-react/SteeringLineIcon';
import CloseLine from 'remixicon-react/CloseLineIcon';
import MenuIcon from 'remixicon-react/MenuLineIcon';
import './header.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';


const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <Link to={'#'} className="nav__logo">
            <SteeringLine /> Elecar
          </Link>
          <div id="nav-menu" className={classNames('nav__menu', { 'show-menu' : click })}>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="#home" className="nav__link active-link">Home</Link>
              </li>
              <li className="nav__item">
                <Link to="#about" className="nav__link">About</Link>
              </li>
              <li className="nav__item">
                <Link to="#popular" className="nav__link">Popular</Link>
              </li>
              <li className="nav__item">
                <Link to="#featured" className="nav__link">Featured</Link>
              </li>
            </ul>

            <div className="nav__close" id="nav-close" onClick={()=>setClick(!click)}>
              <CloseLine />
            </div>
          </div>

          <div id="nav-toggle" onClick={()=>setClick(!click)} className="nav__toggle"
             >
          <MenuIcon />
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
