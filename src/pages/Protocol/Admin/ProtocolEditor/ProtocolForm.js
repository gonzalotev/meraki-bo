import { Field, Form } from 'formik';
import { FormButtons, TextAreaField, TextField } from 'components';
import { connect } from 'react-redux';
import { selectStatus } from 'store/protocol/selector';

const containerStyle = Object.freeze({ w: '100%', maxW: '100%' });

const ProtocolForm = ({ status, isSubmitting }) => (
  <Form noValidate>
    <Field
      component={TextField}
      name="title"
      label="Títutlo"
      containerStyle={containerStyle}
    />
    <Field
      component={TextAreaField}
      name="content"
      rows={10}
      label="Contenido"
      containerStyle={containerStyle}
    />
    <Field
      component={TextAreaField}
      name="signature"
      rows={5}
      label="Firma"
      containerStyle={containerStyle}
    />
    <FormButtons
      isDisabled={isSubmitting}
      isLoading={status.isFetching}
      submitText="Guardar"
    />
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(ProtocolForm);
