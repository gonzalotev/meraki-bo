import { useSelector } from 'react-redux';
import { selectStatus } from 'store/resource/selector';
import LoadingPage from 'components/LoadingPage';
import Carousel from 'components/Carousel';
import {
  Container, HStack, Text, Stack,
} from '@chakra-ui/react';

const ResourcePage = ({ resource }) => {
  const status = useSelector(selectStatus);
  return (
    <Container>
      <HStack justifyContent="center" wrap="wrap" mt={5}>
        {status.isFetching && <LoadingPage />}
        <Carousel images={resource.images} pr={5} />
        <Stack w="100%" maxW={500}>
          <Text fontSize={22}>{resource.description}</Text>
        </Stack>
      </HStack>
    </Container>
  );
};

export default ResourcePage;
