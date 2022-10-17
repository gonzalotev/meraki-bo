import { Field, Form } from 'formik';
import { Button } from '@chakra-ui/react';
import { TextAreaField, TextField } from 'components';
import { connect } from 'react-redux';
import { selectStatus } from 'store/protocol/selector';

const ProtocolForm = ({ status }) => (
  <Form style={{ width: '100%' }}>
    <Field
      component={TextField}
      name="title"
      label="Títutlo"
      containerStyle={{ w: '100%', maxW: '100%' }}
    />
    <Field
      component={TextAreaField}
      name="content"
      rows={10}
      label="Contenido"
      containerStyle={{ w: '100%', maxW: '100%' }}
    />
    <Field
      component={TextAreaField}
      name="signature"
      rows={5}
      label="Firma"
      containerStyle={{ w: '100%', maxW: '100%' }}
    />
    <Button type="submit" isLoading={status.isFetching}>Guardar</Button>
  </Form>
);

export default connect(state => ({ status: selectStatus(state) }))(ProtocolForm);
