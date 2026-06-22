import React from 'react';
import { Layout, Menu } from 'antd';
import { BookOutlined, UserOutlined, SwapOutlined, HomeOutlined } from '@ant-design/icons';
import { colors } from '../styles/theme';

const { Sider } = Layout;

function SidebarComponent({ currentTab, onMenuClick }) {
  const sidebarItems = [
    { key: 'books', icon: <BookOutlined />, label: 'Knihy' },
    { key: 'readers', icon: <UserOutlined />, label: 'Čitatelia' },
    { key: 'borrows', icon: <SwapOutlined />, label: 'Výpožičky' },
    { type: 'divider' },
    { key: 'go-home', icon: <HomeOutlined />, label: 'Úvodná stránka', danger: true },
  ];

  return (
    <Sider 
      width={250} 
      style={{ backgroundImage: colors.sidebarGradient }}
    >
      <Menu 
        theme="dark" 
        mode="inline" 
        selectedKeys={[currentTab]} 
        items={sidebarItems} 
        onClick={onMenuClick}
        style={{ background: 'transparent', borderRight: 0 }}
      />
    </Sider>
  );
}

export default SidebarComponent;