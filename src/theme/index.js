import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import base from './base';
import components from './components';

const theme = extendTheme({ ...base, components }, withDefaultColorScheme({
  colorScheme: 'pink',
}));

export default theme;
