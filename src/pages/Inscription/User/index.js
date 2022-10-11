import { connect } from 'react-redux';
import { Formik } from 'formik';
import { saveInscriptionRequest } from 'store/inscription/reducer';
import { defaultValues } from 'constant';
import inscriptionForm from './inscriptionForm';
import validationSchema from './validationSchema';

const InscriptionUser = ({ onSubmit }) => (
  <Formik
    initialValues={defaultValues.inscription}
    component={inscriptionForm}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  />
);

export default connect(
  null,
  { onSubmit: saveInscriptionRequest },
)(InscriptionUser);
