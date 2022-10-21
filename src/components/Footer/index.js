import { Wrap, Box, Text } from '@chakra-ui/react';

const Footer = () => (
  <Wrap
    id="footer"
    justify="space-between"
    w="100%"
    h="70px"
    bg="#3ecbb0"
    px={5}
    textAlign="center"
    color="white"
    mt="0 !important"
    pt={2}
  >
    <Box>
      <Text>DOMICILIO</Text>
      <Text>Coronel Dominguez 725 - Villa Madero</Text>
    </Box>
    <Box>
      <Text>TELÉFONO</Text>
      <Text>1123949573</Text>
    </Box>
    <Box>
      <Text>INSTAGRAM</Text>
      <Text>@meraki.espacioartistico</Text>
    </Box>
    <Box>
      <Text>FACEBOOK</Text>
      <Text>meraki espacio artistico</Text>
    </Box>
  </Wrap>
);

export default Footer;
