import { Heading } from '@chakra-ui/react';

const Title = ({ title, ...props }) => (
  <Heading
    fontSize={50}
    color="pink.300"
    mb={5}
    textAlign="center"
    {...props}
  >
    {title}
  </Heading>
);

export default Title;
