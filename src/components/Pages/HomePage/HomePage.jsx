import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.container}>
      <div>
        <p className={css.helloText}>Welcome to the events</p>

        <div className={css.wrap}>
          <NavLink to="/events">
            <button className={css.button}>Events</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
