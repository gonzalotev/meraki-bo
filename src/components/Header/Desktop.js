import { Button, Stack, Wrap } from '@chakra-ui/react';
import { NavLink } from 'components';
import { menuItems } from 'constant';

const Desktop = ({ withSession, logout, goToLogin }) => (
  <>
    <Wrap flex={1}>
      {menuItems.map(item => <NavLink key={item.path} to={item.path} label={item.label} />)}
    </Wrap>
    <Stack pr={5}>
      {withSession
        ? <Button variant="rounded" onClick={logout}>Salir</Button>
        : <Button variant="rounded" onClick={goToLogin}>Ingresar</Button>}
    </Stack>
  </>
);

export default Desktop;
