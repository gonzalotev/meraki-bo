import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 99%;
  height: 10%;
  text-align: center;
  background: #ffb9d1;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  overflow: hidden;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  height: 50px;
  flex-grow: 1;
  justify-content: center;
  margin-top: 1.5%;
  width: 100%;
  @media screen and (max-width: 678px) {
    ${({ noSmall }) => (noSmall ? 'display: none;' : '')}
  }
`;

export const Item = styled.p`
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 0;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-align: ${({ align }) => align || 'center'};
`;

export const WrapperImage = styled.div`
  align-self: flex-end;
`;

export const List = styled.ul`
  margin: 20px 10px;
  list-style-type: none;
  padding: 0;
`;
