import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { selectDuty } from 'store/duty/selector';
import {
  Container, Wrap, Text,
} from '@chakra-ui/react';
import { cleanDuty, fetchDutyRequest, saveDutyRequest } from 'store/duty/reducer';
import { useParams } from 'react-router';
import { defaultValues } from 'constant';
import DutyForm from './DutyForm';
import validationSchema from './validationSchema';

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
      <Text>Aranceles</Text>
      <Wrap>
        <Text>Campos Obligatorios (*)</Text>
        <Formik
          component={DutyForm}
          validationSchema={validationSchema}
          initialValues={{ ...defaultValues.duty, ...duty }}
          onSubmit={onSubmit}
          enableReinitialize
        />
      </Wrap>
    </Container>
  );
};

export default connect(
  (state) => ({ duty: selectDuty(state) }),
  { onSubmit: saveDutyRequest, fetchDuty: fetchDutyRequest, onRemove: cleanDuty },
)(DutyEditor);
