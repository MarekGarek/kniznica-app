import styled from 'styled-components';
import { colors } from '../../styles/theme';


export const ShelfWrapper = styled.div`
  width: 100%;
  padding: 1.5rem 0;

  .swiper {
    padding: 1rem 0.5rem;
    overflow: visible;  
  }
`;

export const ShelfTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.textDark};
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-left: 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem; 
    left: 0.5rem;
    height: 0.2vw;
    width: 20rem;
    
    background: ${colors.underlineGradient};
  }
    
`;


export const CardWrapper = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 22rem;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
  
  background-color: ${colors.bookCardLight};
`;

export const CardImage = styled.div`
  width: 100%;
  height: 65%; 
  background-image: url(${props => props.$bg});
  
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.bookCardDark};
  
  padding: 0.5rem;
`;

export const CardContent = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
  background-color: ${colors.bookCardLight};
`;

export const CardTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;