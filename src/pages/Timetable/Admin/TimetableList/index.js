import { Table } from 'components';
import { HStack, IconButton, Container } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectStatus } from 'store/timetable/selector';
import { removeTimetableRequest } from 'store/timetable/reducer';

const AdminTimetableTable = ({ timetables, onRemove }) => {
  const navigate = useNavigate();
  const columns = [
    { key: 'schedule', label: 'Horario' },
    { key: 'day', label: 'Dia' },
    { key: 'discipline', label: 'Disciplina' },
    { key: 'actions', style: { width: 150 } },
  ];

  const rows = timetables.map(timetable => ({
    key: timetable.idTimetable,
    values: [
      timetable.schedule,
      timetable.day,
      timetable.discipline,
      // eslint-disable-next-line react/jsx-key
      <HStack>
        <IconButton aria-label="bla" icon={<EditIcon />} onClick={() => navigate(`/timetable/${timetable.idTimetable}`)} />
        <IconButton aria-label="bla" icon={<DeleteIcon />} onClick={() => onRemove(timetable.idTimetable)} />
      </HStack>,
    ],
  }));

  return (
    <Container>
      <IconButton aria-label="bla" onClick={() => navigate('/timetable/create')} icon={<AddIcon />} />
      <Table data={rows} name="timetables" columns={columns} size="sm" />
    </Container>
  );
};

export default connect(
  state => ({ status: selectStatus(state) }),
  { onRemove: removeTimetableRequest },
)(AdminTimetableTable);
