import { useDispatch } from 'react-redux';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import { Label, Text, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFieldFilter = e =>
    dispatch(contactsSlice.actions.filteredContact(e.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
};
