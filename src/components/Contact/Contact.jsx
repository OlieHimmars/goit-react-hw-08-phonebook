import PropTypes from 'prop-types';
import { Wrapper, Icon, Number, Button } from './Contact.styled';
import { FaUser } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Icon>
          <FaUser />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{number}</Number>
        <Button type="button" onClick={() => dispatch(deleteContact(id))}>
          <TiDelete size="50px" />
        </Button>
      </Wrapper>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
