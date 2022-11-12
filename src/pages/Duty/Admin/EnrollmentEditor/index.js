import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { selectEnrollment } from 'store/duty/selector';
import { Container, Text } from '@chakra-ui/react';
import { cleanDuty, fetchDutyRequest, saveEnrollmentRequest } from 'store/duty/reducer';
import { useParams } from 'react-router';
import { defaultValues } from 'constant';
import enrollmentSchema from 'schemas/enrollmentSchema';
import Title from 'components/Title';
import EnrollmentForm from './EnrollmentForm';

const EnrollmentEditor = ({
  onSubmit, enrollment, fetchDuty, onRemove,
}) => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      fetchDuty({ id });
    }
    return onRemove;
  }, [id]);
  return (
    <Container maxW="max-content">
      <Title title="Matrícula" />
      <Text>Campos Obligatorios (*)</Text>
      <Formik
        component={EnrollmentForm}
        validationSchema={enrollmentSchema}
        initialValues={{ ...defaultValues.enrollment, ...enrollment }}
        onSubmit={onSubmit}
        enableReinitialize
      />
    </Container>
  );
};

export default connect(
  (state) => ({ enrollment: selectEnrollment(state) }),
  { onSubmit: saveEnrollmentRequest, fetchDuty: fetchDutyRequest, onRemove: cleanDuty },
)(EnrollmentEditor);
