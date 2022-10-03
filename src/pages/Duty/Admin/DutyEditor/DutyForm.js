import { TextField, NumberField } from 'components';
import { Button, Container } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/duty/selector';

const DutyForm = ({ status, isSubmitting }) => (
  <Form>
    <Container shadow="base">
      <Field
        name="title"
        component={TextField}
        label="Título"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container shadow="base">
      <Field
        name="subtitle"
        component={TextField}
        label="subtítulo"
        isDisabled={status.isFetching}
      />
    </Container>
    <Container shadow="base">
      <Field
        name="price"
        component={NumberField}
        label="Arancel"
        isDisabled={status.isFetching}
      />
    </Container>
    <Button
      type="submit"
      isDisabled={!!isSubmitting}
      isLoading={status.isFetching}
      bg="pink.300"
      my={5}
    >
      Guardar
    </Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(DutyForm);
