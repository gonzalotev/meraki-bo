import { Table } from 'components';
import { Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { removeTimetableRequest } from 'store/timetable/reducer';
import { daysOptions } from 'constant';
import { groupBy } from 'utils';

const TimetableTable = ({ timetables }) => {
  const days = daysOptions.map(day => ({ key: day.value, label: day.label }));
  const columns = [{ key: 'schedule', label: 'Horarios' }, ...days];
  const timetableGroup = groupBy(timetables, 'schedule') || {};
  const rows = Object.entries(timetableGroup).map((timetable) => ({
    key: timetable[0],
    values: [timetable[0], ...daysOptions.map(day => timetable[1].find(t => t.day === day.value)?.discipline)],
  }));

  return (
    <Container minW="full">
      <Table
        data={rows}
        name="timetables"
        columns={columns}
        size="md"
        fontSize={20}
        mt={2}
      />
    </Container>
  );
};

export default connect(null, { onRemove: removeTimetableRequest })(TimetableTable);
