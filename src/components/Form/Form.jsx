import React, { useState } from 'react';

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
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={e => setDateOfBirth(e.target.value)}
          required
        />
        <p>Where did you hear about this event?</p>

        <label>
          <input type="radio" name="question" value="media" />
          Social media
        </label>
        <label>
          <input type="radio" name="question" value="friends" />
          Friends
        </label>
        <label>
          <input type="radio" name="question" value="myself" />
          Found myself
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

export default EventRegistrationForm;
