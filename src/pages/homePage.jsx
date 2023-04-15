import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Container } from 'components/Container/Container';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
import { Title, LinkWrapper, Text } from './homePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>TO GET STARTED, PLEASE</Title>
          <LinkWrapper>
            <NavLinkStyled style={{ color: 'green' }} to="/register">
              Register
            </NavLinkStyled>{' '}
            <Text>or</Text>
            <NavLinkStyled style={{ color: 'green' }} to="/login">
              {' '}
              Log In
            </NavLinkStyled>{' '}
          </LinkWrapper>
        </Container>
      )}
    </>
  );
}
