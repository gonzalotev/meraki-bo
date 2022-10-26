import { Table } from 'components';
import {
  HStack, IconButton, Container, Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeDutyRequest } from 'store/duty/reducer';

const columns = Object.freeze([
  { key: 'title', label: 'Nombre' },
  { key: 'price', label: 'Precio' },
  { key: 'actions', style: { width: 130 } },
]);

const AdminDutyTable = ({ duties, onRemove }) => {
  const navigate = useNavigate();
  const rows = duties.map(duty => ({
    key: duty.idDuty,
    values: [
      duty.title,
      duty.price,
      <HStack key={duty.idDuty} justifyContent="flex-end">
        <IconButton
          aria-label="edit"
          icon={<EditIcon />}
          onClick={() => navigate(`/duty/${duty.idDuty}`)}
        />
        <IconButton
          aria-label="remove"
          icon={<DeleteIcon />}
          onClick={() => onRemove(duty.idDuty)}
        />
      </HStack>,
    ],
  }));

  return (
    <Container>
      <Button
        aria-label="add"
        onClick={() => navigate('/duty/create')}
        leftIcon={<AddIcon />}
        float="right"
      >
        Agregar Arancel
      </Button>
      <Button
        aria-label="add"
        onClick={() => navigate('/enrollment')}
        leftIcon={<AddIcon />}
        float="right"
      >
        Modificar Matricula
      </Button>
      <Table
        data={rows}
        name="duties"
        columns={columns}
        size="sm"
        mt={2}
      />
    </Container>
  );
};

export default connect(null, { onRemove: removeDutyRequest })(AdminDutyTable);
