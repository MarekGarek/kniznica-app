import React, { useState } from 'react';
import { Table, Space } from 'antd';
import { AgendaHeader, AgendaTitle, AddButton, AgendaWrapper, TableCard } from '../../styles/SharedAgenda.styles';
import { useBooks } from '../../hooks/useBooks';
import { useBorrows } from '../../hooks/useBorrows';
import { getBookColumns } from './bookColumns';
import BooksModal from './bookModal';

function BooksPage() {
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); 

  const { data: books = [], isLoading } = useBooks();
  const { borrowBook, returnBook } = useBorrows();

  const handleAddClick = () => {
    setSelectedBook(null);
    setIsModalOpen(true);
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleBorrow = async (book) => {
    const reader_id = "11111111"; 
    await borrowBook({ book_id: book.id, reader_id });
  };

  const handleReturn = async (book) => {
    const reader_id = "11111111";
    await returnBook({ book_id: book.id, reader_id });
  };

  const columns = getBookColumns(books, {
    onEdit: handleEdit,
    onBorrow: handleBorrow,
    onReturn: handleReturn
  });

  return (
    <AgendaWrapper>
      <Space orientation="vertical" size="middle" style={{ display: 'flex', width: '100%' }}>
        
        <AgendaHeader>
          <AgendaTitle>Agenda kníh</AgendaTitle>
          <AddButton type="primary" onClick={handleAddClick}>
            + Pridať knihu
          </AddButton>
        </AgendaHeader>
        
        <TableCard>
          <Table 
            columns={columns} 
            dataSource={books} 
            loading={isLoading}
            rowKey="id"
            pagination={{ 
              pageSize: currentPageSize,
              pageSizeOptions: ['10', '20', '50', '100'],
              onShowSizeChange: (_, size) => setCurrentPageSize(size),
              showLessItems: true, 
              size: "small" 
            }}
            bordered
            rowClassName={(record) => 
              selectedBook && record.id === selectedBook.id ? 'selected-r' : ''
            }
          />
        </TableCard>

      </Space>

      <BooksModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        book={selectedBook} 
      />
      
    </AgendaWrapper>
  );
}

export default BooksPage;