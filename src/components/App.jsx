import { Component } from 'react';
import { ContactList } from 'components/Contacts/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    const contact = {
      name,
      number,
    };
    const dublicateContact = this.findDublicateContact(
      contact,
      this.state.contacts
    );
    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { ...values, id: nanoid() }],
        }));

    resetForm();
  };

  findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  onFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const FilteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        {this.state.contacts.length > 0 && <h2>Contacts</h2>}
        {this.state.contacts.length > 0 && (
          <Filter
            value={this.state.filter}
            onFilterChange={this.onFilterChange}
          />
        )}
        <ContactList
          contacts={FilteredContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
