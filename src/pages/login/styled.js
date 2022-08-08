import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-left: 35%;
  margin-top: 5%;
  padding-bottom: 15%;
  width: 30%;
  height: 60%;
  background-color: #FFEBF2;
`;

export const Title = styled.h2`
  font-size: 50px;
  color: #FE80AB;
  margin-left: 5%;
`;

export const Input = styled.input`
  color: aliceblue;
  margin-top: 5%;
  margin-left: -15%;
  width: 130%;
  height: 40px;
  border-radius: 0.2rem;
  font-size: 20px;
`;

export const Button = styled.button`
  color: #FF8ADA;
  background-color: #FFDEF5;
  width: 133%;
  height: 40px;
  margin-top: 10%;
  margin-left: -15%;
  border-radius: 0.2rem;
  font-size: 20px;
`;

export const Resetpass = styled(Link)`
  color: #FF8ADA;
  text-decoration: none;
  font-size: 20px;
  margin-top: 10%;
  margin-left: 0.5%;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => align || 'center'};
`;