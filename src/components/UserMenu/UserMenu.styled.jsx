import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { TiContacts } from 'react-icons/ti';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #f9cc04, #f7f98f);
  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);
  z-index: 9;
  font-family: 'Roboto';
  justify-content: space-between;
`;

export const LogoNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  margin-right: 80px;
  margin-left: 40px;
  color: #ffffff;
  font-size: 24px;
  align-items: center;
`;

export const Logo = styled(TiContacts)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  color: #ffffff;
`;

export const UserBox = styled.div``;

export const UserName = styled.p`
  font-size: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const Button = styled.button`
  margin: 15px;
  height: 50px;
  width: 120px;
  font-weight: 500;

  font-size: 24px;
  color: #fff;
  background-color: #0084ff;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color, color 250ms linear;

  :hover,
  :focus {
    background-color: #000cb6b7;
    color: #000;
  }
`;
