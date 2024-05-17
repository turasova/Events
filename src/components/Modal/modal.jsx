import { useEffect } from 'react';
import css from './modal.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import EventRegistrationForm from 'components/Form/Form';

export const Modal = ({ onCloseModal, onSubmit }) => {
  // useEffect(() => {
  //   fetchCars();
  // }, []);
  // console.log();

  useEffect(() => {
    const handleEscClose = evt => {
      if (evt.code === 'Escape') onCloseModal();
      console.log('Press');
    };

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onCloseModal]);

  const handleOverlayClose = evt => {
    if (evt.target === evt.currentTarget) onCloseModal();
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClose}>
      <div className={css.modal}>
        <AiOutlineClose className={css.close} onClick={onCloseModal} />
        <div className={css.form_container}>
          <h1 className={css.title}>Event registration</h1>
          <EventRegistrationForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};
