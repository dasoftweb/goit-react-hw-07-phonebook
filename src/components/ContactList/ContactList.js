import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { connect } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const getVisibleContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allItems.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
 contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: contactId => dispatch(contactActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
