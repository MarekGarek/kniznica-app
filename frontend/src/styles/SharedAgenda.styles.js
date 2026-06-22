import styled from 'styled-components';
import { Button, Card } from 'antd';
import { colors } from './theme';

export const AgendaHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2vh;
`;

export const AgendaTitle = styled.h2`
  font-family: 'Georgia', 'Times New Roman', serif;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2A2420;
  letter-spacing: -0.01em;
  
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140px;
    height: 2px;
    background: ${colors.underlineGradient};
    border-radius: 2px;
  }
`;

export const AddButton = styled(Button)`
  && {
    height: 5vh;
    padding: 0 1.5vw;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AgendaWrapper = styled.div`
  min-height: 85vh;
  padding: 3vh 3vw;
  position: relative;

  background: 
    ${colors.warmCream}; 
`;

export const TableCard = styled(Card)`
  && {
    padding: 1vh;
    background: rgba(255, 255, 255, 0.85); 
    backdrop-filter: blur(8px); 
    border-radius: 1rem; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04); 
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 100%;

    .ant-card-body {
      padding: 12px;
    }
  }
`;