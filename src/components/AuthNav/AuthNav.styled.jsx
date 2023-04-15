import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  width: 80px;
  padding: 0 15px;
  font-weight: 700;
  font-size: 20px;
  color: #fff;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.15);
  }
  &.active {
    color: #0ba822;
  }
`;
