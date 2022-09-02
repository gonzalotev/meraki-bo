import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { protocolFetchRequest } from '../../store/protocol/reducer';
import { getProtocol, getStatusProtocol } from '../../store/protocol/selector';
import {
  Container, Title, Text, Content, TextForm, ContentForm,
} from './styled';

const Protocol = () => {
  const protocols = useSelector(getProtocol);
  const status = useSelector(getStatusProtocol);
  const dispatch = useDispatch();
  console.log('isFetching', status?.isFetching, protocols);

  useEffect(() => {
    dispatch(protocolFetchRequest());
  }, []);

  return (
    <Container>
      {protocols ? protocols.map((protocol) => (
        <Content key={protocol.SerialKey}>
          <Title>{protocol.Nombre}</Title>
          <Text>{protocol.Detalle}</Text>
        </Content>
      ))
        : <Text>No hay protocolo por el momento</Text>}
      <ContentForm>
        <TextForm> Nos Comprometemos como familia a cumplir con las medidas explicadas anteriormente </TextForm>
        <TextForm> ........................................................(NOMBRE Y APELLIDO ADULTO A CARGO)</TextForm>
        <TextForm> ........................................................(DNI)</TextForm>
        <TextForm> ........................................................(NOMBRE Y APELLIDO ALUMNO)</TextForm>
        <TextForm> ........................................................(DNI DEL ALUMNO)</TextForm>
      </ContentForm>

    </Container>
  );
};

export default Protocol;
