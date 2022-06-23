import React from "react";

import { menuList } from "../../utils";
import { Button } from "../../components";

import "./Header.scss";

const Header = () => {
  const menuListRendrer = menuList.map((item) => (
    <li className="menu__item" key={item}>
      <a href="#" className="menu__link">
        {item}
      </a>
    </li>
  ));

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <img src="/assets/logo.svg" alt="Logo" />
          </a>
          <ul className="menu">{menuListRendrer}</ul>
          <Button className="menu__btn">Contact</Button>
        </nav>
        <h1 className="header__title">Portfolio</h1>
        <p className="header__description">
          Agency provides a full service range including technical skills,
          design, business understanding.
        </p>
      </div>
    </header>
  );
};

export default Header;
