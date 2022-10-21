import { downloadExcel } from 'react-export-table-to-excel';
import { IconButton } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

const ExportExcel = ({
  header, body, filename, pageName,
}) => {
  function handleDownloadExcel() {
    downloadExcel({
      fileName: filename,
      sheet: pageName,
      tablePayload: {
        header,
        body,
      },
    });
  }

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <IconButton bg="pink.300" w={100} onClick={handleDownloadExcel} icon={<DownloadIcon />} />
    </div>
  );
};

export default ExportExcel;
