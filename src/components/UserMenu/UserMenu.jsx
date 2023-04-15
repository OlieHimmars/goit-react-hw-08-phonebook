import {
  HeaderWrapper,
  Logo,
  LogoNavLink,
  UserName,
  Text,
  UserBox,
  Button,
} from './UserMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth/authSelectors';
import { authOperations } from 'redux/auth/authOperation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(authSelectors.getUserName);
  const userEmail = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <HeaderWrapper>
        <LogoNavLink to="/">
          <Logo />
          ContactBook
        </LogoNavLink>
        <UserBox>
          <UserName>Welcome, {userName}</UserName>
          <Text>{userEmail}</Text>
        </UserBox>

        <Button
          type="button"
          onClick={() => {
            dispatch(authOperations.logOut());
            navigate('/');
          }}
        >
          Log out
        </Button>
      </HeaderWrapper>
    </>
  );
};
