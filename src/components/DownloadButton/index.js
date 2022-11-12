import { Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const DownloadButton = ({ onClick, ...props }) => (
  <Button
    aria-label="download"
    bg="pink.500"
    onClick={onClick}
    ml="auto"
    mt={4}
    display="block"
    leftIcon={<DownloadIcon />}
    {...props}
  >
    Descargar
  </Button>
);

export default DownloadButton;
