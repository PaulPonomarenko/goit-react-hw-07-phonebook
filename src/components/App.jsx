import React from 'react';
import { FormData } from './FormData/FormData';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <FormData />
      <Filter />
      <Contacts />
    </>
  );
}
