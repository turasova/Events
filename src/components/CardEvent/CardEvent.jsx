import { useState } from 'react';
import css from './CardEvent.module.css';
import { Modal } from 'components/Modal/modal';

export const CardEvent = ({ events }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modal, setModal] = useState(null);

  const onOpenModal = modalData => {
    setIsShowModal(true);
    setModal(modalData);
  };

  const onCloseModal = () => {
    setIsShowModal(false);
    setModal(null);
  };
  return (
    <>
      {events?.map(({ id, job, description }) => (
        <li key={id} className={css.list_item}>
          <h1 className={css.title}>{job}</h1>
          <p>{description}</p>

          <div className={css.button_container}>
            <button type="button" onClick={onOpenModal}>
              {isShowModal && (
                <Modal
                  modal={modal}
                  onCloseModal={onCloseModal}
                  onOpenModal={onOpenModal}
                />
              )}
              Register
            </button>
            <button type="button">View</button>
          </div>
        </li>
      ))}
    </>
  );
};
