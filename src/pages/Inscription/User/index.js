import { connect } from 'react-redux';
import { Formik } from 'formik';
import { saveInscriptionRequest } from 'store/inscription/reducer';
import { defaultValues } from 'constant';
import inscriptionSchema from 'schemas/inscriptionSchema';
import inscriptionForm from './inscriptionForm';

const InscriptionUser = ({ onSubmit }) => (
  <Formik
    initialValues={defaultValues.inscription}
    component={inscriptionForm}
    validationSchema={inscriptionSchema}
    onSubmit={onSubmit}
  />
);

export default connect(
  null,
  { onSubmit: saveInscriptionRequest },
)(InscriptionUser);
