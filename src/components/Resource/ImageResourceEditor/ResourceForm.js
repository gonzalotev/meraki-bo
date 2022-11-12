import { FormButtons, TextField } from 'components/index';
import { Box } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { connect } from 'react-redux';
import { selectStatus } from 'store/resource/selector';
import { useEffect } from 'react';

const isValidUrl = (url) => /https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)/g.test(url);

const ResourceForm = ({
  status, isSubmitting, values, setImage, onCancel,
}) => {
  useEffect(() => {
    if (isValidUrl(values?.url)) {
      setImage(values.url);
    } else {
      setImage(undefined);
    }
  }, [values.url]);
  return (
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
      <FormButtons
        onCancel={onCancel}
        isDisabled={isSubmitting}
        isLoading={status.isFetching}
      />
    </Form>
  );
};

export default connect(state => ({ status: selectStatus(state) }))(ResourceForm);
