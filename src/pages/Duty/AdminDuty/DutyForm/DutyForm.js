import { TextField, NumberField } from 'components';
import { Button, Container } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from '../../../../store/session/selector';

const DutyForm = ({ status, isSubmitting, handleChange }) => (
  <Form>
    <Container shadow="base">
      <Field
        name="title"
        component={TextField}
        label="Titulo"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container shadow="base">
      <Field
        name="Subtitle"
        component={TextField}
        label="subtitulo"
        onChange={handleChange}
        isDisabled={status.isFetching}
      />
    </Container>
    <Container shadow="base">
      <Field
        name="price"
        component={NumberField}
        label="Arancel"
        onChange={handleChange}
        isDisabled={status.isFetching}
      />
    </Container>
    <Button
      type="submit"
      disabled={!!isSubmitting}
      isLoading={status.isFetching}
      onChange={handleChange}
      bg="pink.300"
      my={5}
    >
      Guardar
    </Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(DutyForm);
