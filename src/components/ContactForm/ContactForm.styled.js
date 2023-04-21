import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapp = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid teal;
  width: 400px;
  border-radius: 8px;
  padding: 30px 0;
  background-color: #d6e7e7;
`;

export const Input = styled(Field)`
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  /* outline-color: #3f57e1; */
  outline: none;
  border: 1px solid #4eaec1;
  font-weight: 700;
`;

export const Error = styled(ErrorMessage)`
  display: flex;
  /* width: 300px; */
  text-align: center;
  color: #ff0000;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 16px;
`;

export const Label = styled.label`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #057da1;
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #d0d2ea;
  color: #000000;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  :hover {
    background-color: #1d5a95;
    color: white;
    border: none;
  }
`;
