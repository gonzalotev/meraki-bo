import { IconButton } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const DownloadButton = ({ onClick, ...props }) => (
  <IconButton
    aria-label="download"
    bg="pink.300"
    w={100}
    onClick={onClick}
    icon={<DownloadIcon />}
    {...props}
  />
);

export default DownloadButton;
