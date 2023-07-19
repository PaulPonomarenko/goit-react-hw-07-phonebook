import React from 'react';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getStatusFilter } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const showVisibleContact = () => {
    const filtred = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(contacts);
    return filtred;
  };

  const showContacts = showVisibleContact();

  return (
    <>
      <h2 className={css.contact__title}>Contacts</h2>
      <div className={css.contacts__container}>
        {contacts.length !== 0 ? (
          <ul className={css.contacts__list}>
            {showContacts.map(({ name, id, phone }) => (
              <li key={id} className={css.contact__item}>
                <p>{name}:</p>
                <span className={css.contact__number}>{phone}</span>
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
