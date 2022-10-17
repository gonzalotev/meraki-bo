import { connect } from 'react-redux';
import { getSessionRequest } from 'store/session/reducer';
import { selectToken } from 'store/session/selector';
import { useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import { fetchStaticDataRequest } from 'store/staticData/reducer';
import { Header, Footer } from '../components';
import Router from './Router';

const Roots = ({ token, getSession, getStaticData }) => {
  const hasToken = token;
  useEffect(() => {
    getStaticData();
    getSession();
  }, []);
  return (
    <Stack id="main" h="100%">
      <Header withSession={hasToken} />
      <Stack id="content" flex={1}>
        <Router withSession={hasToken} />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default connect(
  state => ({ token: selectToken(state) }),
  { getSession: getSessionRequest, getStaticData: fetchStaticDataRequest },
)(Roots);
