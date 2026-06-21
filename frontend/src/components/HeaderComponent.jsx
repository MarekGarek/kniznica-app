import React from 'react';
import { Dropdown, ConfigProvider } from 'antd';
import { BookOutlined, UserOutlined, SwapOutlined, MenuOutlined } from '@ant-design/icons';

import { 
  StyledHeader, 
  HeaderSpacer, 
  HeaderTitle, 
  MenuButton, 
  dropdownTheme 
} from '../styles/Header.styles.js';

function HeaderComponent({ isAdminMode, onDropdownClick }) {
  const dropdownItems = [
    { key: 'books', icon: <BookOutlined />, label: 'KNIHY' },
    { key: 'readers', icon: <UserOutlined />, label: 'ČITATELIA' },
    { key: 'borrows', icon: <SwapOutlined />, label: 'VÝPOŽIČKY' },
  ];

  return (
    <StyledHeader>
      
      <HeaderSpacer />
      
      <HeaderTitle>🏛️ KNIŽNICA SYSTEM</HeaderTitle>

      {!isAdminMode ? (
        <ConfigProvider theme={dropdownTheme}>
          <Dropdown 
            menu={{ items: dropdownItems, onClick: onDropdownClick }} 
            placement="bottomRight" 
            trigger={['click']}
            styles={{ root: { minWidth: '15vw' } }}
          >
            <MenuButton type="text">
              <MenuOutlined />
            </MenuButton>

          </Dropdown>
        </ConfigProvider>
      ) : (
        <HeaderSpacer />
      )}
    </StyledHeader>
  );
}

export default HeaderComponent;