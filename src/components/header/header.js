import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header body__header">
        <a href="logo header__logo">
          <span className="logo__text"> Star DB </span>
        </a>
        <ul className="menu header__menu">
          <li className="menu__item"><a href="/people">People</a></li>
          <li className="menu__item"><a href="/planets">Planets</a></li>
          <li className="menu__item"><a href="/starships">Starships</a></li>
        </ul>
      </header>
    );
  }
}

export default Header;
