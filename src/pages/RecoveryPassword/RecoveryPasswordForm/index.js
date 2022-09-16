import { TextField } from 'components';
import { Button, HStack, Text } from '@chakra-ui/react';
import { Field, Form } from 'formik';
import { answers } from 'constant';

const style = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  height: '100%',
};

const RecoveryPasswordForm = ({ isSubmitting, values }) => (
  <Form style={style}>
    <Field
      component={TextField}
      name="email"
      label="Email"
    />
    {values.answers.map((answer, index) => (
      <>
        <Text color="pink.300" align="left" px={6} w="100%">{answers[index]}</Text>
        <Field
          component={TextField}
          name={`answers.${index}`}
        />
      </>
    ))}
    <HStack pb={2}>
      <Button
        disabled={!!isSubmitting}
        bg="pink.600"
      >
        Cancelar
      </Button>
      <Button
        type="submit"
        disabled={!!isSubmitting}
        bg="pink.300"
      >
        Enviar
      </Button>
    </HStack>
  </Form>
);

export default RecoveryPasswordForm;
