import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-opertations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

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

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: contactId => dispatch(contactsOperations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
