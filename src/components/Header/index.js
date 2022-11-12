import logo from 'assets/logo.png';
import { connect } from 'react-redux';
import { selectToken } from 'store/session/selector';
import { HStack, Image, useBreakpointValue } from '@chakra-ui/react';
import { push } from 'redux-first-history';
import { logoutRequest } from 'store/session/reducer';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = ({ logout, goToLogin, withSession }) => {
  const isMobile = useBreakpointValue({ base: true, '4xl': false });
  return (
    <HStack id="header" w="100%" p="5px 10px">
      <Image src={logo} alt="logo" width={124} height={93} p={2} objectFit="cover" />
      {!isMobile && <Desktop {...{ goToLogin, logout, withSession }} />}
      {isMobile && <Mobile {...{ goToLogin, logout, withSession }} />}
    </HStack>
  );
};

export default connect(
  state => ({ status: selectToken(state) }),
  dispatch => ({ logout: () => dispatch(logoutRequest()), goToLogin: () => dispatch(push('/Login')) }),
)(Header);
