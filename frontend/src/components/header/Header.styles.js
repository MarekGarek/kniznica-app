import styled from 'styled-components';
import { Layout, Button } from 'antd';
import { colors } from '../../styles/theme';

const { Header } = Layout;

const bookPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M10 20h10v30H10zm30 0h10v30H40zM25 15h10v35H25z' fill='%23ffffff' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`;

export const StyledHeader = styled(Header)`
  height: 10vh !important;
  line-height: 10vh !important;
  background-image: ${bookPattern};
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${colors.primary};
`;

export const HeaderSpacer = styled.div`
  width: 40px;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Georgia', 'Times New Roman', serif;
  margin: 0; 
  font-size: 2rem; 
  letter-spacing: 0.08em; 
  font-weight: 700; 
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;

  background: linear-gradient(135deg, #FFF6EE 0%, #e3ccb5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.4));
`;

export const MenuButton = styled(Button)`
  display: flex !important; 
  align-items: center; 
  justify-content: center; 
  width: 40px; 
  height: 40px;

  .anticon {
    font-size: 28px !important; 
    color: ${colors.textLight} !important;
  }
`;


export const dropdownTheme = {
  token: {
    controlItemBgHover: colors.primary,
  },
  components: {
    Dropdown: {
      paddingBlock: 12,
      controlPaddingHorizontal: 24,
      fontSize: 18,
      colorBgElevated: colors.bgSidebar,
      colorText: colors.textLight,
    },
  },
};