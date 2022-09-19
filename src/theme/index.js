import { extendTheme } from '@chakra-ui/react';
import base from './base';
import components from './components';

const theme = extendTheme({ ...base, components });

export default theme;
