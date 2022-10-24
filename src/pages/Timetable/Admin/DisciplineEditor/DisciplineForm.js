import { TextField } from 'components';
import { Box, Button, HStack } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/discipline/selector';
import { push } from 'redux-first-history';

const DisciplineForm = ({ status, isSubmitting, goTo }) => (
  <Form style={{ height: '100%' }}>
    <Box shadow="base">
      <Field
        name="name"
        component={TextField}
        label="Disciplina"
        isRequired
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
  dispatch => ({ goTo: () => dispatch(push('/timetable')) }),
)(DisciplineForm);
