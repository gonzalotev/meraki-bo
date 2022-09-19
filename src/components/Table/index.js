import React from 'react';
import PropTypes from 'prop-types';
import {
  Flex,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  Table as ChakraTable,
  HStack,
  Text,
} from '@chakra-ui/react';

import { buildRows } from 'utils';
import LoadingPage from '../LoadingPage';

const Table = ({
  caption,
  columns,
  data,
  emptyMessage,
  isLoading,
  name,
  ...props
}) => {
  const columnsData = Array.isArray(columns) ? columns : [];
  const sizeHeader = columnsData.length;

  return (
    <VStack w="100%">
      <Flex w="100%" overflowX="auto" overflowY="hidden">
        <ChakraTable border="1px" borderColor="brand.neutral100" {...props}>
          {caption && (
            <TableCaption data-testid="caption" placement="top">
              {caption}
            </TableCaption>
          )}
          <Thead>
            <Tr>
              {columnsData.map(column => (
                <Th key={column.key} {...column.style}>
                  <HStack>
                    <Text ml="0 !important" id={column.key}>
                      {column.label || ''}
                    </Text>
                  </HStack>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {!isLoading && data.length === 0 && (
              <Tr key={emptyMessage}>
                <Td colSpan={sizeHeader} textAlign="center">
                  {emptyMessage}
                </Td>
              </Tr>
            )}
            {isLoading && (
              <Tr key="loading">
                <Td colSpan={sizeHeader}>
                  <LoadingPage noStatic />
                </Td>
              </Tr>
            )}
            {!isLoading && data.length > 0 && buildRows(data, columnsData).map(row => (
              <Tr key={row?.key} {...row?.containerStyle}>
                {columnsData.map(header => (
                  <Td key={`${row.key}-${header.key}`} {...row.style} {...header.tdStyle}>
                    {row[header.key]}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </ChakraTable>
      </Flex>
    </VStack>
  );
};

Table.propTypes = {
  caption: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})),
  emptyMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
};

Table.defaultProps = {
  caption: null,
  data: [],
  emptyMessage: 'No hay resultados',
  isLoading: false,
  name: 'table',
};

export default Table;
