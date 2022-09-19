import { connect } from 'react-redux';
import { getSessionRequest } from 'store/session/reducer';
import { selectToken } from 'store/session/selector';
import { useEffect } from 'react';
import { Container, Content } from './styled';
import { Header, Footer } from '../components';
import WithoutSession from './WithoutSession';

const Roots = ({ token, getSession }) => {
  const hasToken = token;
  useEffect(() => {
    getSession();
  }, []);
  return (
    <Container id="body">
      <Header withSession={hasToken} />
      <Content id="content">
        <WithoutSession />
      </Content>
      <Footer />
    </Container>
  );
};

export default connect(state => ({ token: selectToken(state) }), { getSession: getSessionRequest })(Roots);
