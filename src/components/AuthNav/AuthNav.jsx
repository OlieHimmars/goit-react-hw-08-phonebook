import { NavLinkStyled } from './AuthNav.styled';
import {
  HeaderWrapper,
  LogoNavLink,
  Logo,
  UserBox,
} from 'components/UserMenu/UserMenu.styled';

export const AuthNav = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoNavLink to="/">
          <Logo />
          ContactBook
        </LogoNavLink>

        <UserBox>
          <NavLinkStyled to="/register">Sign up</NavLinkStyled>
          <NavLinkStyled to="/login">Log in</NavLinkStyled>
        </UserBox>
      </HeaderWrapper>
    </>
  );
};
