import css from './ParticipantPage.module.css';
import { useSelector } from 'react-redux';
import { selectParticipants } from 'store/selectors';

const ParticipantsPage = () => {
  const participants = useSelector(selectParticipants);

  console.log(participants);

  if (!Array.isArray(participants)) {
    return <div>Error: Participants data is not an array.</div>;
  }

  // useEffect(() => {
  //   setParticipants(allParticipants);
  // }, [allParticipants]);

  // useEffect(() => {
  //   const storedName = localStorage.getItem('name');
  //   const storedEmail = localStorage.getItem('email');
  //   console.log(storedEmail);

  //   console.log(storedName);

  //   const name = JSON.parse(storedName);
  //   const email = JSON.parse(storedEmail);

  //   if (name && email) {
  //     setParticipants(prevParticipants => [
  //       ...prevParticipants,
  //       { name, email },
  //     ]);
  //   }
  // }, []);

  // const formData = [name, email];
  // console.log(formData);
  // // Зберегти name та email у масиві participants
  // setParticipants.push({ formData });
  //setParticipants.push({ formEmail });

  // const { name, email } = participants;

  // Оновлення стану за допомогою функції оновлення
  // const updateParticipants = () => {
  //   setParticipants(prevParticipants => [...prevParticipants, { name, email }]);
  // };

  // // Викликаємо функцію оновлення при потрібності
  // updateParticipants();

  return (
    <div>
      {participants?.map((participant, index) => (
        <ul key={index} className={css.container}>
          <li>Name: {participant.name}</li>
          <li>Email: {participant.email}</li>
        </ul>
      ))}
    </div>
  );
};
export default ParticipantsPage;
