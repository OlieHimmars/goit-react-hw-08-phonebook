import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperation';
import {
  Form,
  Label,
  Span,
  Input,
  Button,
} from 'components/Login/Login.styled';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Span>Enter Your name</Span>
          <Input onChange={handleChange} type="text" name="name" value={name} />
        </Label>

        <Label>
          <Span>Enter Your e-mail</Span>
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
          />
        </Label>

        <Label>
          <Span>Enter Your password</Span>
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          />
        </Label>
        <Button type="submit">Sign In</Button>
      </Form>
    </>
  );
}
