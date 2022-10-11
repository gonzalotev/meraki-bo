import { useSelector } from 'react-redux';
import { selectStatus } from 'store/resource/selector';
import LoadingPage from 'components/LoadingPage';
import Carousel from 'components/Carousel';
import {
  Container, Title, Text, Content,
} from './styled';

const ResourcePage = ({ resource }) => {
  const status = useSelector(selectStatus);
  return (
    <Container style={{ marginTop: '100px' }}>
      {status.isFetching && <LoadingPage />}
      <Carousel images={resource.images} />
      <Content>
        <Title>{resource.title}</Title>
        <Text>{resource.description}</Text>
      </Content>
    </Container>
  );
};

export default ResourcePage;
