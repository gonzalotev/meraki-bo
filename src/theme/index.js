import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import base from './base';
import components from './components';

export default extendTheme({ ...base, components }, withDefaultColorScheme({ colorScheme: 'pink' }));
