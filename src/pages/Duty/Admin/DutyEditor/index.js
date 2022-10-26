import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { selectDuty } from 'store/duty/selector';
import {
  Container, Text, VStack,
} from '@chakra-ui/react';
import { cleanDuty, fetchDutyRequest, saveDutyRequest } from 'store/duty/reducer';
import { useParams } from 'react-router';
import { defaultValues } from 'constant';
import dutySchema from 'schemas/dutySchema';
import DutyForm from './DutyForm';

const DutyEditor = ({
  onSubmit, duty, fetchDuty, onRemove,
}) => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchDuty({ id });
    }
    return onRemove;
  }, [id]);
  return (
    <Container>
      <VStack mt={5}>
        <Text fontWeight="bold">Aranceles</Text>
        <Text>Campos Obligatorios (*)</Text>
      </VStack>
      <Formik
        component={DutyForm}
        validationSchema={dutySchema}
        initialValues={{ ...defaultValues.duty, ...duty }}
        onSubmit={onSubmit}
        enableReinitialize
      />
    </Container>
  );
};

export default connect(
  (state) => ({ duty: selectDuty(state) }),
  { onSubmit: saveDutyRequest, fetchDuty: fetchDutyRequest, onRemove: cleanDuty },
)(DutyEditor);
