import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { selectUser } from 'store/session/selector';
import Title from 'components/Title';
import TableList from './TableList';
import LoadingPage from '../LoadingPage';

const EditorPage = ({
  sessionUser, status = {}, title, list,
}) => (
  <Container>
    <Title title={title} />
    {sessionUser.role === 'admin' && <TableList list={list} /> }
    {status.isFetching && <LoadingPage />}
  </Container>
);

export default connect(
  state => ({ sessionUser: selectUser(state) }),
)(EditorPage);
