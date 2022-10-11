import { Heading, Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { selectUser } from 'store/session/selector';
import TableList from './TableList';
import LoadingPage from '../LoadingPage';

const EditorPage = ({
  sessionUser, status = {}, title, list,
}) => (
  <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
    <Heading fontSize={50} color="pink.300" mb={5}>{title}</Heading>
    {sessionUser.role === 'admin' && <TableList list={list} /> }
    {status.isFetching && <LoadingPage />}
  </Container>
);

export default connect(
  state => ({ sessionUser: selectUser(state) }),
)(EditorPage);
