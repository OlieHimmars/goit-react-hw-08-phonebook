import {
  Form,
  Label,
  Span,
  Input,
  Button,
} from 'components/Login/Login.styled';

export const Registration = () => {
  return (
    <Form autoComplete="off">
      <Label>
        <Span>Enter Your name</Span>
        <Input type="text" name="name" />
      </Label>

      <Label>
        <Span>Enter Your e-mail</Span>
        <Input type="email" name="email" />
      </Label>

      <Label>
        <Span>Enter Your password</Span>
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Sign In</Button>
    </Form>
  );
};
