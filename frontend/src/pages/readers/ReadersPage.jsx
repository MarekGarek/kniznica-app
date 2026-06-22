import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { useReaders } from '../../hooks/useReaders';
import { getReaderColumns } from './readersColumns';
import ReadersModal from './readersModal';
import { AgendaHeader, AgendaTitle, AddButton, AgendaWrapper, TableCard } from '../../styles/SharedAgenda.styles';

function ReadersPage() {
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const { data: readers = [], isLoading } = useReaders();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReader, setEditingReader] = useState(null);

  const handleEdit = (reader) => {
    setEditingReader(reader);
    setIsModalOpen(true);
  };

  const handleAddClick = () => {
    setEditingReader(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingReader(null);
  };

  const columns = getReaderColumns(readers, handleEdit);

  return (
    <AgendaWrapper>
      <Space orientation="vertical" size="middle" style={{ display: 'flex', width: '100%' }}>
        
        <AgendaHeader>
          <AgendaTitle>Agenda čitateľov</AgendaTitle>
          <AddButton type="primary" onClick={handleAddClick}>
            + Pridať čitateľa
          </AddButton>
        </AgendaHeader>
        
        <TableCard>
          <Table 
            columns={columns} 
            dataSource={readers} 
            loading={isLoading}
            rowKey="id_card"
            bordered={true}
            pagination={{ 
              pageSize: currentPageSize,
              pageSizeOptions: ['10', '20', '50', '100'],
              onShowSizeChange: (_, size) => {
                setCurrentPageSize(size);
              },
              showLessItems: true, 
              size: "small" 
            }}
            rowClassName={(record) => 
              editingReader && record.id_card === editingReader.id_card ? 'selected-r' : ''
            }
          />
        </TableCard>

      </Space>

      <ReadersModal 
        open={isModalOpen}
        onClose={handleCloseModal}
        reader={editingReader}
      />

    </AgendaWrapper>
  );
}

export default ReadersPage;