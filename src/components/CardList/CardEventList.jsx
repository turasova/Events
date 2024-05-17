import { CardEvent } from 'components/CardEvent/CardEvent';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEvents } from 'store/selectors';
import { getAllEventsThunk } from 'store/thunks';
import css from './CardEventList.module.css';

export const CardEventList = () => {
  const dispatch = useDispatch();

  const events = useSelector(selectEvents);

  useEffect(() => {
    dispatch(getAllEventsThunk());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      <CardEvent events={events} />
    </ul>
  );
};
