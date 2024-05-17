import React from 'react';
import css from './EventsPage.module.css';
import { CardEventList } from 'components/CardList/CardEventList';

const EventsPage = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Events</h1>
        <div>
          <CardEventList />
        </div>
      </div>
    </>
  );
};

export default EventsPage;
