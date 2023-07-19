import React from 'react';
import { FormData } from './FormData/FormData';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <>
      <FormData />
      <Filter />
      <Contacts />
    </>
  );
}
