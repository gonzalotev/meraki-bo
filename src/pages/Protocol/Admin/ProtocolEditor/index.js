import { Formik } from 'formik';
import { defaultValues } from 'constant';
import { connect } from 'react-redux';
import { protocolSaveRequest } from 'store/protocol/reducer';
import protocolSchema from 'schemas/protocolSchema';
import { Title } from 'components';
import ProtocolForm from './ProtocolForm';

const Admin = ({ protocol, onSubmit }) => (
  <>
    <Title title={protocol.title} mb={0} />
    <Formik
      component={ProtocolForm}
      initialValues={{ ...defaultValues.protocol, ...protocol }}
      validationSchema={protocolSchema}
      onSubmit={onSubmit}
      enableReinitialize
    />
  </>
);

export default connect(null, { onSubmit: protocolSaveRequest })(Admin);
