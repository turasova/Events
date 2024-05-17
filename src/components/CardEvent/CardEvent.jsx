import css from './CardEvent.module.css';

export const CardEvent = ({ events }) => {
  return (
    <>
      {events?.map(({ id, job, description }) => (
        <li key={id} className={css.list_item}>
          <h1 className={css.title}>{job}</h1>
          <p>{description}</p>

          <div className={css.button_container}>
            <button type="button" onClick={onsubmit}>
              Register
            </button>
            <button type="button">View</button>
          </div>
        </li>
      ))}
    </>
  );
};
