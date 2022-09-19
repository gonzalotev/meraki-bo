import { TextField, NumberField, CheckboxListField } from 'components';
import { connect } from 'react-redux';
import {
  Button, Container, RadioGroup, Radio, Stack, Text,
} from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';
import RadioListField from 'components/Fields/RadioListField';

const style = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  paddingTop: '20px',
};
const styleContainer = {
  borderRadius: '5px',
  margin: '5px',
};
const value = '';
const LoginForm = ({ status, isSubmitting }) => (
  <Form style={style}>
    <Container style={styleContainer} shadow="base">
      <Field
        name="name"
        component={TextField}
        label="Nombre y Apellido"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        type="date"
        name="yearDate"
        component={TextField}
        label="Fecha de nacimiento"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="documentId"
        label="DNI"
        isDisabled={status.isFetching}
      />
      <Field
        component={NumberField}
        name="address"
        label="Dirección"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Text fontSize="2xl" mt={5}>Disciplina</Text>
      <Text fontSize="initial" mb={2}>(Marcar la/las actividades que realiza en nuestro espacio)</Text>
      <Field
        name="discipline"
        component={CheckboxListField}
        options={[
          { value: '1', label: 'Acrobacia I' },
          { value: '2', label: 'Acrobacia II' },
          { value: '3', label: 'Arte I' },
          { value: '4', label: 'Arte II' },
          { value: '5', label: 'Arte III' },
          { value: '6', label: 'Canto' },
          { value: '7', label: 'Comedia Musical' },
          { value: '8', label: 'Danza Jazz' },
          { value: '9', label: 'Entrenamiento Funcional' },
          { value: '10', label: 'Iniciacion a la Danza' },
          { value: '11', label: 'Juegos teatrales' },
          { value: '12', label: 'Pastelería Creativa' },
          { value: '13', label: 'Street Jazz' },
          { value: '14', label: 'Taller de Musica' },
          { value: '15', label: 'Teatro' },
          { value: '16', label: 'Yoga para adultos' },
          { value: '17', label: 'Yoga para chicos' },
        ]}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="motherName"
        label="Nombre y Apellido (Madre)"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="motherPhone"
        label="Teléfono de contacto (Madre)"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="fatherName"
        label="Nombre y Apellido (Padre)"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="fatherPhone"
        label="Teléfono de contacto (Padre)"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="tutorQuestion"
        label="En caso de no retirarse solo especificar que adultos están autorizados para retirar al menor"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="medicalQuestion"
        label="Consideraciones médicas a tener en cuenta.
      Ej: alergias, tratamientos, operaciónes, enfermedad crónica, medicamentos."
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="socialWork"
        label="Obra Social. (Completar con el número de afiliado y teléfono de emergencia)"
        isDisabled={status.isFetching}
      />
    </Container>
    <Button
      type="submit"
      disabled={!!isSubmitting}
      isLoading={status.isFetching}
      bg="pink.300"
      my={5}
    >
      Enviar
    </Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(LoginForm);
