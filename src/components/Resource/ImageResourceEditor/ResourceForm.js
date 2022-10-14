import { TextField } from 'components/index';
import { Button, Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/resource/selector';

const ResourceForm = ({ status, isSubmitting }) => (
  <Form noValidate>
    <Box shadow="base">
      <Field
        name="name"
        component={TextField}
        label="Nombre"
        isRequired
      />
    </Box>
    <Box shadow="base">
      <Field
        name="url"
        component={TextField}
        label="Imágen URL"
        isRequired
      />
    </Box>
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

export default connect(
  state => ({ status: selectStatus(state) }),
)(ResourceForm);
