import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: './missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: './my-profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <h1>
          <img
            src="/assets/planet.png"
            alt="logo"
            className={styles.logo}
          />
          Space Traveler&#39;s Hub
        </h1>
      </Link>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
