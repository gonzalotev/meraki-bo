import { Table } from 'components';
import {
  HStack, IconButton, Container,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const AdminDutyTable = ({ duties }) => {
  const navigate = useNavigate();
  const columns = [
    { key: 'title', label: 'Nombre' },
    { key: 'price', label: 'Precio' },
    { key: 'actions', style: { width: 150 } },
  ];

  const rows = duties.map(duty => ({
    key: duty.id,
    values: [
      duty.title,
      duty.price,
      // eslint-disable-next-line react/jsx-key
      <HStack>
        <IconButton aria-label="bla" icon={<EditIcon />} />
        <IconButton aria-label="bla" icon={<DeleteIcon />} />
      </HStack>,
    ],
  }));

  return (
    <Container>
      <IconButton aria-label="bla" onClick={() => navigate('/Duty/create')} icon={<AddIcon />} />
      <Table
        data={rows}
        name="duties"
        columns={columns}
      />
    </Container>
  );
};

export default AdminDutyTable;
