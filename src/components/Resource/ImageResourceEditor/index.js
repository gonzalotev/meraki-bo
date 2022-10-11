import { connect } from 'react-redux';
import { Formik } from 'formik';
import { selectDuty } from 'store/duty/selector';
import { Container, Text } from '@chakra-ui/react';
import { defaultValues } from 'constant';
import { saveImageResourceRequest } from 'store/resource/reducer';
import { useQuery } from 'hooks';
import ResourceForm from './ResourceForm';
import validationSchema from './validationSchema';

const ResourceEditor = ({ onSubmit }) => {
  const type = useQuery().get('type');
  const origin = useQuery().get('origin');
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Text>Imágenes</Text>
      <Text>Campos Obligatorios (*)</Text>
      <Formik
        component={ResourceForm}
        validationSchema={validationSchema}
        initialValues={defaultValues.resourceImage}
        onSubmit={values => onSubmit({ values, type, origin })}
      />
    </Container>
  );
};

export default connect(
  (state) => ({ duty: selectDuty(state) }),
  { onSubmit: saveImageResourceRequest },
)(ResourceEditor);
