import shortId from 'shortid';
// import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortId.generate(),
//     name,
//     number,
//   },
// });

//Without @reduxjs/toolkit

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: shortId.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/changeFilter');

export default { addContact, deleteContact, changeFilter };
