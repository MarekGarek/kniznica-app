import React, { useEffect } from 'react';
import { Modal, Form, Input, DatePicker } from 'antd';
import { useReaders } from '../../hooks/useReaders';
import dayjs from 'dayjs';

function ReadersModal({ open, onClose, reader }) {
  const [form] = Form.useForm();
  const isEditMode = !!reader;

  const { createReader, updateReader, isSaving } = useReaders();

  useEffect(() => {
    if (open) {
      if (reader) {
        form.setFieldsValue({
          first_name: reader.first_name,
          last_name: reader.last_name,
          id_card: reader.id_card,
          birth_date: reader.birth_date ? dayjs(reader.birth_date) : null,
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, reader, form]);

  const disabledBirthDate = (current) => {
    return current && current >= dayjs().endOf('day');
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      
      const formattedValues = {
        ...values,
        birth_date: values.birth_date ? values.birth_date.format('YYYY-MM-DD') : null,
      };
      
      if (isEditMode) {
        await updateReader({ id: reader.id_card, ...formattedValues });
      } else {
        await createReader(formattedValues);
      }

      onClose();
    } catch (errorInfo) {
      console.log('Chyba vo validácii formulára:', errorInfo);
    }
  };

  return (
    <Modal
      title={isEditMode ? "Upraviť čitateľa" : "Pridať nového čitateľa"}
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
        name="readerForm"
      >

        <Form.Item
          name="first_name"
          label="Meno"
          rules={[
            { required: true, message: 'Prosím, zadajte meno čitateľa' },
            { max: 50, message: 'Meno môže mať maximálne 50 znakov!' }
          ]}
        >
          <Input placeholder="Napr. Ján" maxLength={55} />
        </Form.Item>

        <Form.Item
          name="last_name"
          label="Priezvisko"
          rules={[
            { required: true, message: 'Prosím, zadajte priezvisko čitateľa' },
            { max: 50, message: 'Priezvisko môže mať maximálne 50 znakov!' }
          ]}
        >
          <Input placeholder="Napr. Mrkvička" maxLength={55} />
        </Form.Item>

        <Form.Item
            name="id_card"
            label="Číslo OP / Karty"
            rules={[
                { 
                required: true, 
                message: 'Prosím, zadajte číslo občianskeho preukazu alebo karty' 
                },
                { 
                max: 8, 
                message: 'Číslo OP/Karty môže mať maximálne 8 znakov!' 
                },
                { 
                pattern: /^[A-Za-z0-9]+$/, 
                message: 'Číslo OP/Karty nesmie obsahovať medzery ani špeciálne znaky (iba A-Z, 0-9)!' 
                }
            ]}
            >
            <Input placeholder="Napr. EA123456" maxLength={8}  disabled={isEditMode}/> 
            </Form.Item>

        <Form.Item
          name="birth_date"
          label="Dátum narodenia"
          rules={[{ required: true, message: 'Prosím, vyberte dátum narodenia' }]}
        >
          <DatePicker 
            style={{ width: '100%' }} 
            format="DD.MM.YYYY"
            placeholder="Vyberte dátum"
            disabledDate={disabledBirthDate}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ReadersModal;