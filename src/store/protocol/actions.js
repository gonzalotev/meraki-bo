import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  protocolFetchRequest: ['loading'],
  protocolFetchSuccess: ['protocol'],
  protocolFetchError: ['error'],
});

export const protocolTypes = Types;
export default Creators;
