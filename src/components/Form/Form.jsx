import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addParticipant } from 'store/eventSlice';

const EventRegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const dispatch = useDispatch();

  // const localStoage = () => {
  //   localStorage.setItem('name', JSON.stringify(name));
  //   localStorage.setItem('email', JSON.stringify(email));
  // };

  // console.log(name, email);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'dateOfBirth':
        setDateOfBirth(value);
        break;
      default:
        break;
    }
    // localStoage();
  };

  const handleSubmit = e => {
    e.preventDefault();
    const participant = { name, email };
    console.log(participant);

    dispatch(addParticipant([participant]));

    reset();

    window.location.href = '/Events/events';
  };
  const reset = () => {
    setName('');
    setEmail('');
    setDateOfBirth('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className={css.label_text}>
          Full Name:
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.label_text}>
          Email:
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={css.label_text}>
          Date of Birth:
          <input
            className={css.input_date}
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            required
          />
        </label>
        <p className={css.text}>Where did you hear about this event?</p>

        <label className={css.radio_label}>
          <input
            type="radio"
            name="question"
            value="media"
            className={css.radio}
          />
          Social media
        </label>
        <label className={css.radio_label}>
          <input
            type="radio"
            name="question"
            value="friends"
            className={css.radio}
          />
          Friends
        </label>
        <label className={css.radio_label}>
          <input
            type="radio"
            name="question"
            value="myself"
            className={css.radio}
          />
          Found myself
        </label>

        <button type="submit" className={css.button}>
          Send
        </button>
      </form>
    </>
  );
};

export default EventRegistrationForm;
