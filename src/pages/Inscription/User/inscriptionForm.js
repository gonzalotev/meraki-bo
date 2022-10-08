import {
  TextField, NumberField, CheckboxListField, RadioListField,
} from 'components';
import { connect } from 'react-redux';
import { Button, Container, Text } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';
import { selectTopics } from 'store/staticData/selector';

const style = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  paddingTop: '20px',
};
const styleContainer = {
  width: '100%',
  borderRadius: '5px',
  margin: '5px',
};
const styleField = {
  borderRadius: '5px',
  width: '100%',
};

const RegisterForm = ({ status, isSubmitting, topics }) => (
  <Form style={style}>
    <Container style={styleContainer} shadow="base">
      <Field
        style={styleField}
        name="name"
        component={TextField}
        label="Nombre y Apellido *"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        style={styleField}
        name="email"
        component={TextField}
        label="Email *"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        type="date"
        name="yearDate"
        component={TextField}
        label="Fecha de nacimiento *"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="documentId"
        label="DNI *"
        isDisabled={status.isFetching}
      />
      <Field
        component={TextField}
        name="address"
        label="Dirección *"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Text fontSize="2xl" mt={5}>Disciplina *</Text>
      <Text fontSize="initial" mb={2}>(Marcar la/las actividades que realiza en nuestro espacio)</Text>
      <Field
        name="discipline"
        component={CheckboxListField}
        getOptionValue={option => option?.id}
        options={topics}
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
        name="phone"
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
      <Text fontSize="initial" mt={5}>¿Se retira solo? *</Text>
      <Field
        component={RadioListField}
        name="retired"
        options={[
          { value: 'yes', label: 'No' },
          { value: 'no', label: 'Si' },
        ]}
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

export default connect(state => ({ status: selectStatus(state), topics: selectTopics(state) }))(RegisterForm);
