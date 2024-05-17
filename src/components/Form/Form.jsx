import React, { useState } from 'react';
import css from './Form.module.css';

function EventRegistrationForm({ onSubmit }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ fullName, email, dateOfBirth });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.label_text}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          className={css.input}
          type="text"
          id="fullName"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </div>
      <div className={css.label_text}>
        <label htmlFor="email">Email:</label>
        <input
          className={css.input}
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={css.label_text}>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          className={css.input_date}
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={e => setDateOfBirth(e.target.value)}
          required
        />
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
      </div>

      <button type="submit" className={css.button}>
        Send
      </button>
    </form>
  );
}

export default EventRegistrationForm;
