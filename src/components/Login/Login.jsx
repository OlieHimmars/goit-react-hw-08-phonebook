import { Form, Label, Span, Input, Button } from './Login.styled';

export const Login = () => {
  return (
    <Form>
      <Label>
        <Span>E-mail</Span>
        <Input type="email" name="email" autocomplete="off" />
      </Label>

      <Label>
        <Span>Password</Span>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
