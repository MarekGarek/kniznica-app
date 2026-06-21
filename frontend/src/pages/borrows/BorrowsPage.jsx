import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { useBorrows } from '../../hooks/useBorrows';
import { getBorrowsColumns } from './borrowsColumns';
import { AgendaHeader, AgendaTitle, AddButton, AgendaWrapper, TableCard } from '../../styles/SharedAgenda.styles';

function BorrowsPage() {
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const { data: borrows = [], isLoading } = useBorrows();
  const columns = getBorrowsColumns(borrows);

  return (
    <AgendaWrapper>
      <Space orientation="vertical" size="middle" style={{ display: 'flex', width: '100%' }}>
        
        <AgendaHeader>
          <AgendaTitle>Agenda výpožičiek</AgendaTitle>
          <AddButton type="primary">
            + Nová výpožička
          </AddButton>
        </AgendaHeader>
        
        <TableCard>
          <Table 
            columns={columns} 
            dataSource={borrows}
            loading={isLoading}
            rowKey="id"
            bordered
            pagination={{ 
              pageSize: currentPageSize,
              pageSizeOptions: ['10', '20', '50', '100'],
              onShowSizeChange: (_, size) => {
                setCurrentPageSize(size);
              },
              showLessItems: true, 
              size: "small" 
            }}
          />
        </TableCard>

      </Space>
    </AgendaWrapper>
  );
}

export default BorrowsPage;