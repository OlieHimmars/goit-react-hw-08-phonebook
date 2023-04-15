import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { contactsSelectors } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactsList = filteredContacts();

  return (
    contacts && (
      <ul>
        {filteredContactsList.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Contact name={name} number={number} id={id} />
            </Item>
          );
        })}
      </ul>
    )
  );
};
