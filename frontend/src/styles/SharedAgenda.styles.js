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
    background: linear-gradient(90deg, #D96B43 0%, rgba(217, 107, 67, 0) 100%);
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
  border-radius: 1.5rem;
  box-shadow: inset 0 0 20px rgba(217, 107, 67, 0.02);
  position: relative;

  background: 
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FAF8F5' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cg transform='scale(0.6) translate(8, 8)'%3E${props => props.iconPaths || `<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'/%3E%3Cpath d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'/%3E`}%3C/g%3E%3C/svg%3E") 
    repeat, 
    ${colors.warmCream};

  background-size: 150px 150px; 
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