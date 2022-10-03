import { Table } from 'components';
import { HStack, IconButton, Container } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectStatus } from 'store/duty/selector';
import { removeDutyRequest } from 'store/duty/reducer';

const AdminDutyTable = ({ duties, onRemove }) => {
  const navigate = useNavigate();
  const columns = [
    { key: 'title', label: 'Nombre' },
    { key: 'price', label: 'Precio' },
    { key: 'actions', style: { width: 150 } },
  ];

  const rows = duties.map(duty => ({
    key: duty.idDuty,
    values: [
      duty.title,
      duty.price,
      // eslint-disable-next-line react/jsx-key
      <HStack>
        <IconButton aria-label="bla" icon={<EditIcon />} onClick={() => navigate(`/duty/${duty.idDuty}`)} />
        <IconButton aria-label="bla" icon={<DeleteIcon />} onClick={() => onRemove(duty.idDuty)} />
      </HStack>,
    ],
  }));

  return (
    <Container>
      <IconButton aria-label="bla" onClick={() => navigate('/duty/create')} icon={<AddIcon />} />
      <Table data={rows} name="duties" columns={columns} size="sm" />
    </Container>
  );
};

export default connect(
  state => ({ status: selectStatus(state) }),
  { onRemove: removeDutyRequest },
)(AdminDutyTable);
