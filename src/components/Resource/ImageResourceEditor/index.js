import { connect } from 'react-redux';
import { Formik } from 'formik';
import {
  Container, HStack, Image, Stack, Text,
} from '@chakra-ui/react';
import { defaultValues } from 'constant';
import { saveImageResourceRequest } from 'store/resource/reducer';
import { useQuery } from 'hooks';
import { selectResources } from 'store/resource/selector';
import { useState } from 'react';
import ResourceForm from './ResourceForm';
import validationSchema from './validationSchema';

const ResourceEditor = ({ onSubmit }) => {
  const url = useQuery().get('url');
  const [image, setImage] = useState(url);
  const type = useQuery().get('type');
  const origin = useQuery().get('origin');
  const name = useQuery().get('name');
  const id = useQuery().get('id');
  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Text>Imágenes</Text>
      <Text>Campos Obligatorios (*)</Text>
      <HStack pt={5}>
        <Image
          src={image}
          hidden={!image}
          alt={name}
          height={300}
          width={300}
          mr={4}
        />
        {!image && (
          <Stack h={300} w={300} border="1px lightGrey solid" justifyContent="center" alignItems="center">
            <Text>
              Imágen inválida.
            </Text>
          </Stack>
        )}
        <Formik
          validationSchema={validationSchema}
          onSubmit={values => onSubmit({ values, type, origin })}
          initialValues={{
            ...defaultValues.resourceImage, url, name, id,
          }}
        >
          {(props) => <ResourceForm {...props} setImage={setImage} />}
        </Formik>
      </HStack>
    </Container>
  );
};

export default connect(
  (state) => ({ resources: selectResources(state) }),
  { onSubmit: saveImageResourceRequest },
)(ResourceEditor);
