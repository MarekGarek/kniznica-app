import styled from 'styled-components';
import { Button, Card } from 'antd';

export const colors = {
  primary: '#D96B43',       
  bgHeader: '#1E1A17',      
  bgSidebar: '#2A2420',     
  bgLayout: '#f5f7fa',      
  textLight: '#F7F4F0',     
  textDark: '#262626',
  warmCream: 'linear-gradient(135deg, #FDFBF7 0%, #f8efe3 100%)', 
};

export const antdTheme = {
  token: {
    colorPrimary: colors.primary,
    borderRadius: 8,
    colorBgLayout: colors.bgLayout,
  },
  components: {
    Layout: {
      headerBg: colors.bgHeader,
      siderBg: colors.bgSidebar,
    },
    Menu: {
      darkItemBg: colors.bgSidebar,
      darkSubMenuItemBg: colors.bgSidebar,
      darkItemColor: '#A69E97',          
      darkItemHoverColor: colors.textLight, 
      fontSize: 18,                   
      itemHeight: 50,
    },
  },
};