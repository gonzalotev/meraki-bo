import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useBoolean } from '@chakra-ui/react';
import TextField from './TextField';

const PasswordField = props => {
  const [isVisible, setIsVisible] = useBoolean();
  return (
    <TextField
      type={isVisible ? 'text' : 'password'}
      iconRight={
        isVisible ? (
          <ViewIcon onClick={setIsVisible.off} />
        ) : (
          <ViewOffIcon onClick={setIsVisible.on} />
        )
      }
      {...props}
    />
  );
};

export default PasswordField;
