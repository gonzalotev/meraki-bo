import { Table } from 'components/index';
import {
  HStack, IconButton, Container, Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeImageResourceRequest } from 'store/resource/reducer';

const ResourceList = ({
  resource, onRemove, type, origin,
}) => {
  const navigate = useNavigate();
  const columns = [
    { key: 'name', label: 'Nombre' },
    { key: 'url', label: 'Url' },
    { key: 'actions', style: { width: 130 } },
  ];

  const rows = resource.images?.map(image => ({
    key: image.id,
    values: [
      image.name,
      image.url,
      <HStack key={image.id} justifyContent="flex-end">
        <IconButton
          aria-label="edit"
          icon={<EditIcon />}
          onClick={() => navigate(
            {
              pathname: `/resource/${image.id}`,
              search: `?${createSearchParams({ type, origin })}`,
            },
          )}
        />
        <IconButton
          aria-label="remove"
          icon={<DeleteIcon />}
          onClick={() => onRemove(image.id)}
        />
      </HStack>,
    ],
  }));

  return (
    <Container minW="100%" alignItems="center" display="flex" h="100%" p={5} flexDirection="column">
      <Button
        aria-label="add"
        onClick={() => navigate({
          pathname: '/resource/create',
          search: `?${createSearchParams({ type, origin })}`,
        })}
        leftIcon={<AddIcon />}
        float="right"
      >
        Agregar
      </Button>
      <Table
        data={rows}
        name={resource.name}
        columns={columns}
        size="sm"
        mt={2}
      />
    </Container>
  );
};

export default connect(null, { onRemove: removeImageResourceRequest })(ResourceList);
