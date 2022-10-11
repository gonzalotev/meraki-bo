import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';

const Modal = ({
  visible = false,
  title,
  onClose,
  children,
}) => (
  <ModalChakra
    motionPreset="slideInBottom"
    onClose={onClose}
    isOpen={visible}
    blockScrollOnMount={false}
  >
    <ModalOverlay />
    <ModalContent pb={5}>
      <ModalHeader textTransform="capitalize">{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </ModalChakra>
);

export default Modal;
