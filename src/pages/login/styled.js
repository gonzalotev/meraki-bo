import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  background-color: #FFEBF2;
  width: 500px;
  height: 500px;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 50px;
  color: #FE80AB;
  margin-left: 5%;
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
