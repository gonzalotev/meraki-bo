import styled from 'styled-components';
import { Form as FormFormik } from 'formik';

export const Form = styled(FormFormik)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Button = styled.button`
  color: #FF8ADA;
  background-color: #FFDEF5;
  width: 200px;
  height: 40px;
  margin-top: 40px;
  border-radius: 0.2rem;
  font-size: 20px;
`;
