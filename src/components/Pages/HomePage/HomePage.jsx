import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.helloText}>Welcome to the events</p>
        <NavLink to="/events">
          <div className={css.wrap}>
            <button className={css.button}>Events</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
