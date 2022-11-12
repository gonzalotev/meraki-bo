import { createStandaloneToast } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

const notify = (title = '', status = 'error') => toast({
  title,
  status,
  duration: 5000,
  isClosable: true,
  position: 'top-right',
  variant: 'top-accent',
});

export default notify;
