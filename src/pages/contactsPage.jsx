import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  return (
    <>
      <Container>
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
