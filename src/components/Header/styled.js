import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    width: 100%;
    text-align: center;
    background: white;
    max-height: 90px;
    height: 100%;
    flex-direction: row;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Wrapper = styled.nav`
    display: flex;
    flex-direction: initial;
    width: 100%;
    margin: auto;
    overflow: hidden;
    height: 100%;
`;

export const Title = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 14px;
    min-width: 160px;
    padding: 10px;
`;

export const NavBar = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    @media screen and (max-width: 678px) {
        display: none
    }
`;

export const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 20px;
    margin: 0 10px;
    font-weight: 700;
    font-family: Arial, sans-serif;
`;
export const NavLogin = styled(Link)`
    color: #FF8ADA;
    background-color: #FFDEF5;
    width: 160px;
    height: 35px;
    border-radius: 20px;
    text-decoration: none;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

export const Logo = styled.img`
    width: 120px;
    height: 100%;
    margin-left: 10px;
`;
