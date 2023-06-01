import { NavLink } from 'react-router-dom';

import s from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <div className={s.navigation}>
      <nav className={s.navigation}>
        <NavLink className={s.navigationItem} to="/">
          HOME
        </NavLink>
        <NavLink className={s.navigationItem} to="/tweets">
          TWEETS
        </NavLink>
      </nav>
    </div>
  );
};
