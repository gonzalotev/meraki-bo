import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
  width: 100%;
  text-align: center;
  background: white;
  display: flex;
  max-height: 90px;
  height: 100%;
`;

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: initial;
  width: 100%;
  margin: auto;
  overflow: hidden;
  height: 100%;
`;

export const Title = styled.h2`
    margin-left: 1%;
    margin-top: 1.5%;
  font-size: 30px;
    width: 30%;
`;

export const NavBar = styled.div`
    display: flex;
    flex-direction: initial;
  min-width: 200px;
  height: 150px;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 678px) {
    ${({ noSmall }) => (noSmall ? 'display: none;' : '')}
  }
`;

export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 25px;
  margin-top: 2%;
  margin-right: 1%;
  margin-left: 1.5%;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => align || 'center'};
`;