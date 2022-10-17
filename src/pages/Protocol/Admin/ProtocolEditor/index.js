import { Formik } from 'formik';
import { defaultValues } from 'constant';
import { connect } from 'react-redux';
import { protocolSaveRequest } from 'store/protocol/reducer';
import protocolSchema from 'schemas/protocolSchema';
import ProtocolForm from './ProtocolForm';

const Admin = ({ protocol, onSubmit }) => (
  <Formik
    component={ProtocolForm}
    initialValues={{ ...defaultValues.protocol, ...protocol }}
    validationSchema={protocolSchema}
    onSubmit={onSubmit}
    enableReinitialize
  />
);

export default connect(null, { onSubmit: protocolSaveRequest })(Admin);
