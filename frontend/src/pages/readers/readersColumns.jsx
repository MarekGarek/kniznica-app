import React from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { getColumnSearchProps } from '../../components/ColumnSearchComponent';
import { formatDate } from '../../utils/dateUtils';

export const getReaderColumns = (readers, onEdit) => {

  return [
    {
      title: 'Číslo OP / Karty',
      dataIndex: 'id_card',
      key: 'id_card',
      width: '26vw',
      sorter: (a, b) => a.id_card.localeCompare(b.id_card),
      ...getColumnSearchProps('id_card', 'číslo karty'),
    },
    {
      title: 'Meno',
      dataIndex: 'first_name',
      key: 'first_name',
      width: '20vw',
      sorter: (a, b) => a.first_name.localeCompare(b.first_name),
      ...getColumnSearchProps('first_name', 'meno'),
    },
    {
      title: 'Priezvisko',
      dataIndex: 'last_name',
      key: 'last_name',
      width: '25vw',
      sorter: (a, b) => a.last_name.localeCompare(b.last_name),
      ...getColumnSearchProps('last_name', 'priezvisko'),
    },
    {
      title: 'Dátum narodenia',
      dataIndex: 'birth_date',
      key: 'birth_date',
      width: '15vw',
      sorter: (a, b) => new Date(a.birth_date) - new Date(b.birth_date),
      render: (birth_date) => formatDate(birth_date),
    },
    {
      title: 'Akcie',
      key: 'actions',
      width: '8vw',
      align: 'center',
      render: (_, record) => (
        <EditOutlined onClick={() => onEdit(record)}/>
      ),
    },
  ];
};