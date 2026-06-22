import styled from 'styled-components';
import { Layout } from 'antd';
import { colors } from '../../styles/theme';

const { Footer } = Layout;

export const CustomFooter = styled(Footer)`
  background-color: ${colors.bgHeader} !important;
  color: ${colors.textLightGray};
  padding: 3rem 2rem 1.5rem 2rem;
  font-size: 0.9rem;
  
  a {
    color: ${colors.textLightGray};
    transition: color 0.2s;
    display: inline-block;
    margin-bottom: 0.5rem;

    &:hover {
      color: ${colors.primary} !important;
    }
  }
`;

export const FooterDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 2rem 0 1.5rem 0;
  width: 100%;
`;