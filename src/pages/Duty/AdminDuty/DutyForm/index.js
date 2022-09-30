import { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { selectDuty } from 'store/duty/selector';
import {
  Container, Wrap, Text,
} from '@chakra-ui/react';
import { saveDutyRequest } from 'store/duty/reducer';
import DutyForm from './DutyForm';
import validetionSchema from './validationSchema';
import { selectStatus } from '../../../../store/session/selector';

const DutySave = ({ onSubmit }) => {
  // const dispatch = useDispatch();
  const Duty = useSelector(selectDuty);

  const handleSubmit = (duty, actions) => {
    onSubmit(duty);
  };
  /* useEffect((actions) => {
    if (Duty.idDuty) {
      dispatch(actions.fetchDutiesRequest(Duty));
    }
    return () => {
      dispatch(actions.cleanValues());
    };
  }, [Duty]); */

  console.log(Duty);
  return (
    <Container>
      <Text>Aranceles</Text>
      <Wrap>
        <Text>Campos Obligatorios (*)</Text>
        <Formik
          component={DutyForm}
          validationSchema={validetionSchema}
          initialValues={Duty}
          onSubmit={handleSubmit}
          enableReinitialize
        />
      </Wrap>
    </Container>
  );
};

export default connect(null, { onSubmit: saveDutyRequest })(DutySave);
