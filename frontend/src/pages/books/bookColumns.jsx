import React from 'react';
import { Tag, Space, Button, Tooltip, Popconfirm } from 'antd';
import { EditOutlined, PlusOutlined, UndoOutlined } from '@ant-design/icons';
import { getColumnSearchProps } from '../../components/ColumnSearchComponent';

export const getBookColumns = (books, handlers) => {
  const { onEdit, onBorrow, onReturn } = handlers;

  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '10vw',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Názov knihy',
      dataIndex: 'title',
      key: 'title',
      width: '40vw',
      sorter: (a, b) => a.title.localeCompare(b.title),  
      ...getColumnSearchProps('title', 'názov knihy'),
      dropdownClassName: 'custom-filter-dropdown',
    },
    {
      title: 'Autor',
      dataIndex: 'author',
      key: 'author',
      width: '30vw',
      sorter: (a, b) => a.author.localeCompare(b.author),
      ...getColumnSearchProps('author', 'autora'),
    },
    {
      title: 'Stav',
      dataIndex: 'isBorrowed',
      key: 'isBorrowed',
      width: '15vw',
      sorter: (a, b) => (a.isBorrowed === b.isBorrowed ? 0 : a.isBorrowed ? 1 : -1),
      render: (isBorrowed, record) => {
        if (isBorrowed) {
          const formattedDate = record.borrowedAt 
            ? record.borrowedAt.split('-').reverse().join('.') 
            : '';

          return (
            <Tooltip 
              color="#f5f5f5"
              styles={{ 
                color: '#262626',
                border: '1px solid #d9d9d9',
                fontSize: '1rem'
              }}
              title={
                <span>
                  Túto knihu si požičal/a <strong>{record.borrowedByFirstName} {record.borrowedByLastName}</strong> dňa {formattedDate}.
                </span>
              }
              placement="top"
            >
              <Tag color="error" style={{ fontWeight: '600', cursor: 'pointer' }}>
                POŽIČANÁ
              </Tag>
            </Tooltip>
          );
        }

        return (
          <Tag color="success" style={{ fontWeight: '600' }}>
            DOSTUPNÁ
          </Tag>
        );
      },
      filters: [
        { text: 'Dostupná', value: false },
        { text: 'Požičaná', value: true },
      ],
      onFilter: (value, record) => record.isBorrowed === value,
    },
    {
      title: 'Akcie',
      key: 'actions',
      width: '8vw',
      align: 'center',
      render: (_, record) => {
        const isCurrentlyBorrowed = record.isBorrowed;

        return (
          <>
          <EditOutlined onClick={() => onEdit(record)}/> 
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          {isCurrentlyBorrowed ? (
            <Popconfirm
              title="Naozaj chcete vrátiť knihu?"
              onConfirm={() => onReturn(record)}
              okText="Vrátiť"
              cancelText="Zrušiť"
            >
              <UndoOutlined/>
            </Popconfirm>
          ) : (
            <Popconfirm
              title={
                <span>
                  Požičať knihu <b>{record.title}</b>
                </span>
              }
              onConfirm={() => onBorrow(record)}
              okText="Požičať"
              cancelText="Zrušiť"
            >
              <PlusOutlined/>
            </Popconfirm>
          )}
          </>
        );

      },
    },
  ];
};