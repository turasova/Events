import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
//import { useSelector } from 'react-redux';
// import { isAuthSelector } from 'store/selectors';
// import AuthMenu from 'components/AuhtMenu/AuthMenu';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <div className={css.containerNav}>
          <ul className={css.navList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                <p className={css.heroText}>Home</p>
              </NavLink>
            </li>
          </ul>
          <ul className={css.auth}>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/participants"
                className={({ isActive }) =>
                  `${css.textLink} ${isActive ? css.active : ''}`
                }
              >
                Participants
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
