import {
  HStack, IconButton, Menu, MenuItem, MenuList, useBoolean,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { menuItems } from 'constant';
import { NavLink } from 'components';

const Mobile = ({ logout, withSession, goToLogin }) => {
  const [show, setShow] = useBoolean();
  return (
    <HStack flex={1} justifyContent="right">
      <Menu isOpen={show}>
        <IconButton
          aria-label="hamburger"
          icon={<HamburgerIcon />}
          mr={4}
          onClick={show ? setShow.off : setShow.on}
        />
        <MenuList right={0} bottom={0} color="#3ecbb0">
          {menuItems.map(item => (
            <MenuItem key={item.path}>
              <NavLink to={item.path} label={item.label} />
            </MenuItem>
          ))}
          <MenuItem onClick={withSession ? logout : goToLogin} fontWeight="bold" textAlign="center" w="100%">
            {withSession ? 'Cerrar sesión' : 'Iniciar sesión'}
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Mobile;
