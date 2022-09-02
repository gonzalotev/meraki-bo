import PropTypes from 'prop-types';
import { Input } from './styled';

const TextInput = ({
  name, placeholder, type, error, ...props
}) => (
  <>
    <Input
      id={name}
      type={type}
      autoComplete="off"
      placeholder={placeholder}
      {...props}
    />
    {error}
  </>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: '',
  type: 'text',
  error: undefined,
};

export default TextInput;
