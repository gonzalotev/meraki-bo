import { Table } from 'components/index';
import {
  HStack, IconButton, Container, Button,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeImageResourceRequest } from 'store/resource/reducer';

const columns = Object.freeze([
  { key: 'name', label: 'Nombre' },
  { key: 'url', label: 'Url' },
  { key: 'actions', style: { width: 130 } },
]);

const ResourceList = ({ resource, onRemove, type }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
              search: `?${createSearchParams({ type, origin: location.pathname, ...image })}`,
            },
          )}
        />
        <IconButton
          aria-label="remove"
          icon={<DeleteIcon />}
          onClick={() => onRemove({ imageId: image.id, type: resource.name })}
        />
      </HStack>,
    ],
  }));

  return (
    <Container>
      <Button
        aria-label="add"
        onClick={() => navigate({
          pathname: '/resource/create',
          search: `?${createSearchParams({ type, origin: location.pathname })}`,
        })}
        leftIcon={<AddIcon />}
        float="right"
        alignSelf="flex-end"
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
