import { NumberField, TextField } from 'components';
import { Button, Box, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/duty/selector';
import { push } from 'redux-first-history';

const EnrollmentForm = ({
  status, isSubmitting, goTo,
}) => (
  <Form style={{ height: '100%' }}>
    <Box shadow="base">
      <Field
        name="name"
        component={TextField}
        label="Titulo"
        isDisabled={status.isFetching}
      />
    </Box>
    <Box shadow="base">
      <Field
        name="price"
        component={NumberField}
        label="Arancel"
        isDisabled={status.isFetching}
      />
    </Box>
    <HStack pb={2} justifyContent="center" my={5}>
      <Button onClick={goTo}>
        Cancelar
      </Button>
      <Button
        type="submit"
        isDisabled={!!isSubmitting}
        isLoading={status.isFetching}
        bg="pink.300"
        my={5}
      >
        Guardar
      </Button>
    </HStack>
  </Form>
);

export default connect(
  state => ({ status: selectStatus(state) }),
  dispatch => ({ goTo: () => dispatch(push('/duty')) }),
)(EnrollmentForm);
