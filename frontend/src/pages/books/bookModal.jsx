import React, { useEffect } from 'react';
import { Modal, Form, Input } from 'antd';
import { useBooks } from '../../hooks/useBooks';

function BooksModal({ open, onClose, book }) {
  const [form] = Form.useForm();
  const isEditMode = !!book;

  const { createBook, updateBook, isSaving } = useBooks();

  useEffect(() => {
    if (open) {
      if (book) {
        form.setFieldsValue({
          title: book.title,
          author: book.author,
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, book, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (isEditMode) {
        await updateBook({ id: book.id, ...values });
      } else {
        await createBook(values);
      }

      onClose();
    } catch (errorInfo) {
      console.log('Chyba vo validácii formulára:', errorInfo);
    }
  };

  return (
    <Modal
      title={isEditMode ? "Upraviť knihu" : "Pridať novú knihu"}
      open={open}
      onOk={handleOk}
      onCancel={onClose}
      okText={isEditMode ? "Uložiť zmeny" : "Pridať"}
      cancelText="Zrušiť"
      destroyOnHidden
      confirmLoading={isSaving}
    >
      <Form
        form={form}
        layout="vertical"
        style={{ marginTop: '20px' }}
        name="bookForm"
      >
        <Form.Item
          name="title"
          label="Názov knihy"
          rules={[
            { required: true, message: 'Prosím, zadajte názov knihy' },
            { max: 255, message: 'Názov knihy môže mať maximálne 255 znakov!' }
          ]}
        >
          <Input placeholder="Napr. Kód exekúcie" maxLength={255} />
        </Form.Item>

        <Form.Item
          name="author"
          label="Autor"
          rules={[
            { required: true, message: 'Prosím, zadajte autora knihy' },
            { max: 100, message: 'Meno autora môže mať maximálne 100 znakov!' }
          ]}
        >
          <Input placeholder="Napr. Jozef Karika" maxLength={100} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default BooksModal;