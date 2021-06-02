import { Component } from 'react';
import { connect } from 'react-redux';
import contactsOpertations from './redux/contacts/contacts-opertations';
import contactsSelectors from './redux/contacts/contacts-selectors';

// Components
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="phonebook">
        <h1 className="phonebook_title">Phonebook</h1>
        <ContactForm />
        <h2 className="phonebook_title">Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Loading</h1>}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOpertations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
