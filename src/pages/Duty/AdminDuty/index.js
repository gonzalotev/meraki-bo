import { Table } from 'components';
import { HStack, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const AdminDuty = ({ duties }) => {
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
    <Table
      data={rows}
      name="duties"
      columns={columns}
    />
  );
};

export default AdminDuty;
