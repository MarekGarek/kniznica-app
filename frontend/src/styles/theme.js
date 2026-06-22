import styled from 'styled-components';
import { Button, Card } from 'antd';
import { createGlobalStyle } from 'styled-components';

export const colors = {
  primary: '#D96B43',
  primaryLight: '#e6bdac',      
  bgHeader: '#1E1A17',      
  bgSidebar: '#2A2420',     
  bgLayout: '#f5f7fa',      
  textLight: '#F7F4F0',     
  textDark: '#262626',
  textLightGray: '#b7b2ae',
  warmCream: 'linear-gradient(135deg, #FDFBF7 0%, #f8efe3 100%)',
  darkCream: 'linear-gradient(135deg, #e8ddc8 40%, #b8a792 100%)',
  sidebarGradient: 'linear-gradient(135deg, #3e342f 10%, #2A2420 100%)',
  underlineGradient: 'linear-gradient(to right, #D96B43 0%, rgba(217, 107, 67, 0.4) 50%, transparent 100%)',
  bookCardDark: '#b9a891',
  bookCardLight: '#efeae0',

  successBg: '#E2ECE9',
  successText: '#1d8560',
  errorBg: '#F3E5E2', 
  errorText: '#e96231',
};

export const antdTheme = {
  token: {
    colorPrimary: colors.primary,
    borderRadius: 8,
    colorBgLayout: colors.bgLayout,

    colorSuccess: colors.successText,
    colorSuccessBg: colors.successBg,
    colorError: colors.errorText,
    colorErrorBg: colors.errorBg,
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

export const GlobalStyle = createGlobalStyle`
  .ant-layout, .ant-layout-content {
    background: ${colors.darkCream} !important;
    overflow-x: hidden; 
  }

  .ant-divider-horizontal {
    height: 0.2vw !important;             
    
    background: linear-gradient(
      to right, 
      transparent 0%, 
      ${colors.primary} 50%, 
      transparent 100%
    ) !important;
    
    opacity: 0.8;                                
  }

 .ant-table-wrapper .ant-table-tbody > tr.ant-table-row:hover > td {
    background: color-mix(in srgb, ${colors.primary} 12%, transparent) !important;
    transition: background 0.2s ease;
  }

  .ant-table-wrapper .ant-table-tbody > tr.selected-r > td {
    background: color-mix(in srgb, ${colors.primary} 20%, transparent) !important;
  }
  
  .ant-table-wrapper .ant-table-tbody > tr.selected-r:hover > td {
    background: color-mix(in srgb, ${colors.primary} 25%, transparent) !important;
  }
`;