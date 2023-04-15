import styled from 'styled-components';

export const Form = styled.form`
  margin: 50px auto;
  padding: 35px;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  opacity: 0.8;
`;

export const Input = styled.input`
  height: 40px;
  width: 400px;
  padding: 5px 10px;

  font-size: 14px;
  color: #000;

  outline: none;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 3px;

  :focus {
    border-color: rgb(60, 120, 100);
  }

  ::placeholder {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const Button = styled.button`
  margin: 15px;
  padding: 10px;
  width: 200px;
  font-weight: 500;

  font-size: 24px;
  color: #fff;
  background-color: #0ba822;
  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: background-color, color 250ms linear;

  :hover,
  :focus {
    background-color: #0ba822;
    color: #000;
  }
`;
