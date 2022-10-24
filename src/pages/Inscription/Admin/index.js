import { connect } from 'react-redux';
import { selectUser } from 'store/session/selector';
import { fetchInscriptionsRequest, removeInscriptionRequest } from 'store/inscription/reducer';
import { downloadExcelRequest } from 'store/app/reducer';
import { useEffect, useState } from 'react';
import { selectInscriptions } from 'store/inscription/selector';
import { Table, Modal, DownloadButton } from 'components';
import {
  HStack, IconButton, Text, useBreakpointValue,
} from '@chakra-ui/react';
import { DeleteIcon, HamburgerIcon } from '@chakra-ui/icons';

const getModalKeys = (isMobile) => [
  isMobile ? { key: 'address', label: 'Dirección' } : undefined,
  { key: 'birthdate', label: 'Fecha de nacimiento' },
  { key: 'documentId', label: 'Documento' },
  { key: 'phone', label: 'Teléfono' },
  { key: 'email', label: 'Email' },
  { key: 'allowGoAlone', label: 'Se puede retirar?' },
  { key: 'medicalConsiderations', label: 'Consideraciones Médicas' },
  { key: 'personsAuthorized', label: 'Autorizados' },
  { key: 'motherName', label: 'Nombre (Madre)' },
  { key: 'motherPhone', label: 'Teléfono (Madre)' },
  { key: 'fatherName', label: 'Nombre (Padre)' },
  { key: 'fatherPhone', label: 'Teléfono (Padre)' },
].filter(Boolean);

const columns = Object.freeze([
  { key: 'name', label: 'Nombre' },
  { key: 'surname', label: 'Apellido' },
  { key: 'documentId', label: 'Documento' },
  { key: 'phone', label: 'Teléfono' },
  { key: 'address', label: 'Dirección' },
  { key: 'discipline', label: 'Disciplina' },
  { key: 'actions', style: { width: 130 } },
]);

const Admin = ({
  onMount, inscriptions, onRemove, download,
}) => {
  const [details, setDetails] = useState();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const rows = inscriptions.map(inscription => ({
    key: inscription.id,
    values: [
      inscription.name,
      inscription.surname,
      inscription.documentId,
      inscription.phone,
      inscription.address,
      inscription.timetable.map(t => t.discipline).join(', '),
      <HStack key={inscription.id} justifyContent="flex-end">
        <IconButton
          aria-label="datails"
          icon={<HamburgerIcon />}
          onClick={() => setDetails(inscription)}
        />
        <IconButton
          aria-label="remove"
          icon={<DeleteIcon />}
          onClick={() => onRemove(inscription.id)}
        />
      </HStack>,
    ],
  }));
  useEffect(() => {
    onMount();
  }, []);
  return (
    <>
      <DownloadButton onClick={() => download({ endpoint: '/api/inscription', fileName: 'Inscripciones' })} />
      {!!details && (
        <Modal title="Detalles" visible onClose={() => setDetails(undefined)}>
          {getModalKeys(isMobile).map(({ key, label }, index) => details[key] && (
            <HStack key={index}>
              <Text fontWeight="bold">{`${label}: `}</Text>
              <Text>{typeof details[key] === 'boolean' ? 'Si' : details[key]}</Text>
            </HStack>
          ))}
        </Modal>
      )}
      <Table
        data={rows}
        name="inscriptions"
        columns={columns}
        size="sm"
        mt={5}
      />
    </>
  );
};

export default connect(
  (state) => ({ sessionUser: selectUser(state), inscriptions: selectInscriptions(state) }),
  { onMount: fetchInscriptionsRequest, onRemove: removeInscriptionRequest, download: downloadExcelRequest },
)(Admin);
