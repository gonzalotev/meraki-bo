import {
  TextField, NumberField, CheckboxListField, RadioListField, SubmitButton,
} from 'components';
import { connect } from 'react-redux';
import { Box, Stack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { selectStatus } from 'store/inscription/selector';
import { useEffect } from 'react';
import { selectTimetables } from 'store/timetable/selector';

const style = Object.freeze({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  paddingTop: '20px',
});

const styleContainer = Object.freeze({
  width: '100%',
  borderRadius: '5px',
  margin: '5px',
});

const styleField = Object.freeze({
  borderRadius: '5px',
  width: '100%',
});

const RegisterForm = ({
  status, isSubmitting, timetables, values, setFieldValue,
}) => {
  const disciplineOptions = timetables.map(timetable => ({
    id: timetable.idTimetable,
    name: `${timetable.discipline} (${timetable.day} - ${timetable.schedule})`,
  }));
  useEffect(() => {
    setFieldValue('personsAuthorized', '');
  }, [values.allowGoAlone]);
  return (
    <Form noValidate style={style}>
      <Stack bg="white" justifyContent="center" mb={5}>
        <Box style={styleContainer} shadow="base">
          <Field
            style={styleField}
            name="name"
            component={TextField}
            label="Nombre"
            isDisabled={status.isFetching}
            isRequired
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            style={styleField}
            name="surname"
            component={TextField}
            label="Apellido"
            isDisabled={status.isFetching}
            isRequired
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            style={styleField}
            name="email"
            component={TextField}
            label="Email"
            isDisabled={status.isFetching}
            isRequired
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            type="date"
            name="birthdate"
            component={TextField}
            label="Fecha de nacimiento"
            isDisabled={status.isFetching}
            isRequired
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            component={NumberField}
            name="documentId"
            label="DNI"
            isDisabled={status.isFetching}
            isRequired
          />
          <Field
            component={TextField}
            name="address"
            label="Dirección"
            isDisabled={status.isFetching}
            isRequired
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            label="Disciplina"
            caption="(Marcar la/las actividades que desea realizar en nuestro espacio)"
            name="disciplines"
            component={CheckboxListField}
            options={disciplineOptions}
            isRequired
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            component={TextField}
            name="motherName"
            label="Nombre y Apellido (Madre)"
            isDisabled={status.isFetching}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            component={NumberField}
            name="motherPhone"
            label="Teléfono de contacto (Madre)"
            isDisabled={status.isFetching}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            component={TextField}
            name="fatherName"
            label="Nombre y Apellido (Padre)"
            isDisabled={status.isFetching}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            component={NumberField}
            name="fatherPhone"
            label="Teléfono de contacto (Padre)"
            isDisabled={status.isFetching}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            label="¿Se retira solo?"
            component={RadioListField}
            name="allowGoAlone"
            isRequired
            options={[
              { value: 'no', label: 'No' },
              { value: 'yes', label: 'Si' },
            ]}
            isDisabled={status.isFetching}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            component={TextField}
            name="personsAuthorized"
            label="En caso de no retirarse solo especificar que adultos están autorizados para retirar al menor"
            isDisabled={status.isFetching || values.allowGoAlone !== 'no'}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            name="medicalConsiderations"
            component={TextField}
            label="Consideraciones médicas a tener en cuenta.
      Ej: alergias, tratamientos, operaciónes, enfermedad crónica, medicamentos."
            isDisabled={status.isFetching}
          />
        </Box>
        <Box style={styleContainer} shadow="base">
          <Field
            name="socialWork"
            component={TextField}
            label="Obra Social. (Completar con el número de afiliado y teléfono de emergencia)"
            isDisabled={status.isFetching}
          />
        </Box>
        <SubmitButton
          submitText="Enviar"
          isDisabled={!!isSubmitting}
          isLoading={status.isFetching}
          hiddenIcon
          style={styleContainer}
        />
      </Stack>
    </Form>
  );
};

export default connect(state => ({
  status: selectStatus(state), timetables: selectTimetables(state),
}))(RegisterForm);
