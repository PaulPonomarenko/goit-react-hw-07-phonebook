import React from 'react';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const showVisibleContact = () => {
    const filtred = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtred;
  };

  const showContacts = showVisibleContact();

  return (
    <>
      <h2 className={css.contact__title}>Contacts</h2>
      <div className={css.contacts__container}>
        {showContacts.length !== 0 ? (
          <ul className={css.contacts__list}>
            {showContacts.map(({ name, id, number }) => (
              <li key={id} className={css.contact__item}>
                <p>{name}:</p>
                <span className={css.contact__number}>{number}</span>
                <button
                  type="button"
                  className={css.contact__delete}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.no__contacts}>CONTACTS NOT FOUND</p>
        )}
      </div>
    </>
  );
};
