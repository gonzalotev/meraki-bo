import { TextField, NumberField } from 'components';
import { getFieldError } from 'utils';
import { connect } from 'react-redux';
import {
  Button, Container, RadioGroup, Radio, Stack, Text,
} from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/session/selector';

const style = {
  display: 'flex',
  alignItems: 'center',
  width: '1000px',
  flexDirection: 'column',
};
const styleContainer = {
  borderRadius: '5px',
  margin: '5px',
};
const value = '';
const LoginForm = ({
  status, isSubmitting, submitCount, touched, errors, handleChange, values,
}) => (
  <Form style={style}>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="name"
        label="Nombre y Apellido"
        error={getFieldError(submitCount, touched, errors, 'name')}
        onChange={handleChange}
        value={values.name}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        type="date"
        name="yearDate"
        label="Fecha de nacimiento"
        error={getFieldError(submitCount, touched, errors, 'yearDate')}
        onChange={handleChange}
        value={values.yearDate}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="years"
        type="number"
        label="Edad"
        error={getFieldError(submitCount, touched, errors, 'years')}
        onChange={handleChange}
        value={values.years}
        isDisabled={status.isFetching}
      />
      <Field
        component={NumberField}
        name="dni"
        label="DNI"
        error={getFieldError(submitCount, touched, errors, 'dni')}
        onChange={handleChange}
        value={values.dni}
        isDisabled={status.isFetching}
      />
      <Field
        component={NumberField}
        name="address"
        label="Dirección"
        error={getFieldError(submitCount, touched, errors, 'address')}
        onChange={handleChange}
        value={values.address}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Text fontSize="2xl" mt={5}>Disciplina</Text>
      <Text fontSize="initial" mb={2}>(Marcar la/las actividades que realiza en nuestro espacio)</Text>
      <RadioGroup value={value} mb={3}>
        <Stack direction="column">
          <Radio value="1">Acrobacia I</Radio>
          <Radio value="2">Acrobacia II</Radio>
          <Radio value="Arte-I">Arte I</Radio>
          <Radio value="Arte-II">Arte II</Radio>
          <Radio value="Arte-III">Arte III</Radio>
          <Radio value="Canto">Canto</Radio>
          <Radio value="Comedia-Musical">Comedia Musical</Radio>
          <Radio value="Danza-Jazz">Danza Jazz</Radio>
          <Radio value="Entrenamiento-Funcional">Entrenamiento Funcional</Radio>
          <Radio value="Iniciacion-a-la-Danza">Iniciacion a la Danza</Radio>
          <Radio value="Juegos-teatrales">Juegos teatrales</Radio>
          <Radio value="Pastelería-Creativa">Pastelería Creativa</Radio>
          <Radio value="Street-Jazz">Street Jazz</Radio>
          <Radio value="Taller-de-Musica">Taller de Musica</Radio>
          <Radio value="Teatro">Teatro</Radio>
          <Radio value="Yoga-para-adultos">Yoga para adultos</Radio>
          <Radio value="Yoga-para-chicos">Yoga para chicos</Radio>
        </Stack>
      </RadioGroup>
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="motherName"
        label="Nombre y Apellido (Madre)"
        error={getFieldError(submitCount, touched, errors, 'motherName')}
        onChange={handleChange}
        value={values.motherName}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="motherPhone"
        label="Teléfono de contacto (Madre)"
        error={getFieldError(submitCount, touched, errors, 'motherPhone')}
        onChange={handleChange}
        value={values.motherPhone}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="fatherName"
        label="Nombre y Apellido (Padre)"
        error={getFieldError(submitCount, touched, errors, 'fatherName')}
        onChange={handleChange}
        value={values.fatherName}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={NumberField}
        name="fatherPhone"
        label="Teléfono de contacto (Padre)"
        error={getFieldError(submitCount, touched, errors, 'fatherPhone')}
        onChange={handleChange}
        value={values.fatherPhone}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="tutorQuestion"
        label="En caso de no retirarse solo especificar que adultos están autorizados para retirar al menor"
        error={getFieldError(submitCount, touched, errors, 'tutorQuestion')}
        onChange={handleChange}
        value={values.tutorQuestion}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="medicalQuestion"
        label="Consideraciones médicas a tener en cuenta.
      Ej: alergias, tratamientos, operaciónes, enfermedad crónica, medicamentos."
        error={getFieldError(submitCount, touched, errors, 'medicalQuestion')}
        onChange={handleChange}
        value={values.medicalQuestion}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container style={styleContainer} shadow="base">
      <Field
        component={TextField}
        name="socialWork"
        label="Obra Social. (Completar con el número de afiliado y teléfono de emergencia)"
        error={getFieldError(submitCount, touched, errors, 'socialWork')}
        onChange={handleChange}
        value={values.socialWork}
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
