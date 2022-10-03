import { connect } from 'react-redux';
import { getSessionRequest } from 'store/session/reducer';
import { selectToken } from 'store/session/selector';
import { useEffect } from 'react';
import { fetchStaticDataRequest } from 'store/staticData/reducer';
import { Container, Content } from './styled';
import { Header, Footer } from '../components';
import Router from './Router';

const Roots = ({ token, getSession, getStaticData }) => {
  const hasToken = token;
  useEffect(() => {
    getStaticData();
    getSession();
  }, []);
  return (
    <Container id="body">
      <Header withSession={hasToken} />
      <Content id="content">
        <Router withSession={hasToken} />
      </Content>
      <Footer />
    </Container>
  );
};

export default connect(
  state => ({ token: selectToken(state) }),
  { getSession: getSessionRequest, getStaticData: fetchStaticDataRequest },
)(Roots);
