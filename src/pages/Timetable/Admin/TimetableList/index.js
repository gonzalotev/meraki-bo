import { Table } from 'components';
import {
  HStack, IconButton, Container, Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeTimetableRequest } from 'store/timetable/reducer';

const columns = Object.freeze([
  { key: 'schedule', label: 'Horario' },
  { key: 'day', label: 'Dia' },
  { key: 'discipline', label: 'Disciplina' },
  { key: 'actions', style: { width: 130 } },
]);

const AdminTimetableTable = ({ timetables, onRemove }) => {
  const navigate = useNavigate();
  const rows = timetables.map((timetable) => ({
    key: timetable.idTimetable,
    values: [
      timetable.schedule,
      timetable.day,
      timetable.discipline,
      <HStack key={timetable.idTimetable} justifyContent="flex-end">
        <IconButton
          aria-label="edit"
          icon={<EditIcon />}
          onClick={() => navigate(`/timetable/${timetable.idTimetable}`)}
        />
        <IconButton
          aria-label="remove"
          icon={<DeleteIcon />}
          onClick={() => onRemove(timetable.idTimetable)}
        />
      </HStack>,
    ],
  }));
  return (
    <Container pb={5}>
      <Button
        aria-label="add"
        onClick={() => navigate('/timetable/create')}
        leftIcon={<AddIcon />}
        float="right"
      >
        Agregar Horario
      </Button>
      <Button
        aria-label="add"
        onClick={() => navigate('/discipline')}
        leftIcon={<AddIcon />}
        float="right"
      >
        Agregar Disciplina
      </Button>
      <Table
        data={rows}
        name="timetables"
        columns={columns}
        size="sm"
        mt={2}
      />
    </Container>
  );
};

export default connect(null, { onRemove: removeTimetableRequest })(AdminTimetableTable);
