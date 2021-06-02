import { createSelector } from 'reselect';

const getLoading = state => state.contacts.loading;

const getContactItems = state => state.contacts.items;

const getFilter = state => state.contacts.filter;

// const getVisibleContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getContactItems(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

//!!!Мемоизация — сохранение (кеширование) результатов выполнения функций для предотвращения повторных вычислений.

const getVisibleContacts = createSelector(
  [getContactItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getContactItems,
  getFilter,
  getVisibleContacts,
};
