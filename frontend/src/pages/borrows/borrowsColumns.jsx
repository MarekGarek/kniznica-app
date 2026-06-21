import React from 'react';
import { Tag } from 'antd';
import { getColumnSearchProps } from '../../components/ColumnSearchComponent';
import { formatDate } from '../../utils/dateUtils';

export const getBorrowsColumns = (borrows, formatDateFn = formatDate) => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '6vw',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Čitateľ',
      key: 'reader',
      width: '26vw',

      sorter: (a, b) => {
        const nameA = `${a.last_name || a.lastName || ''} ${a.first_name || a.firstName || ''}`.trim();
        const nameB = `${b.last_name || b.lastName || ''} ${b.first_name || b.firstName || ''}`.trim();
        return nameA.localeCompare(nameB);
      },

      ...getColumnSearchProps('reader', 'čitateľa'), 
      onFilter: (value, record) => {
        const fullName = `${record.first_name || record.firstName || ''} ${record.last_name || record.lastName || ''}`.toLowerCase();
        return fullName.includes(value.toLowerCase());
      },

      render: (_, record) => {
        const fName = record.first_name || record.firstName || '';
        const lName = record.last_name || record.lastName || '';
        return `${fName} ${lName}`.trim() || 'Neznámy čitateľ';
      },
    },
    {
      title: 'Kniha',
      dataIndex: 'bookTitle',
      key: 'bookTitle',
      width: '33vw',
      sorter: (a, b) => a.bookTitle.localeCompare(b.bookTitle),
      ...getColumnSearchProps('bookTitle', 'knihu'),
    },
    {
      title: 'Požičané od',
      dataIndex: 'borrowedAt',
      key: 'borrowedAt',
      width: '15vw',
      sorter: (a, b) => new Date(a.borrowedAt) - new Date(b.borrowedAt),
      render: (borrowedAt) => formatDateFn(borrowedAt),
    },
    {
      title: 'Vrátené dňa',
      dataIndex: 'returnedAt',
      key: 'returnedAt',
      width: '20vw',
      sorter: (a, b) => {
        if (!a.returnedAt) return 1;
        if (!b.returnedAt) return -1;
        return new Date(a.returnedAt) - new Date(b.returnedAt);
      },
      render: (returnedAt) => (
        returnedAt ? (
          formatDateFn(returnedAt)
        ) : (
          <Tag color="warning" style={{ fontWeight: '600' }}>
            EŠTE NEVRÁTENÉ
          </Tag>
        )
      ),
    },
  ];
};