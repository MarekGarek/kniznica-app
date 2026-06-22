import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const SliderWrapper = styled.div`
  width: 100%;

  .swiper {
    overflow: visible;
  }

  .swiper-slide {
    width: 60%; /* Stredný slajd zaberá 60% šírky */
    height: 28vw;
    border-radius: 0.6vw;
    overflow: hidden;
    position: relative;
    transition: all 0.5s ease;
    
    // Efekt pre bočné (neaktívne) slajdy
    transform: scale(0.85);
    filter: blur(6px);
    opacity: 0.4;
  }

  // Efekt pre stredný (aktívny) slajd
  .swiper-slide-active {
    transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }

  // šípky
  .swiper-button-prev,
  .swiper-button-next {
    color: ${colors.primary};
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SlideImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$bg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  
  // Tmavý prechod na spodku obrázka, aby text svietil
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(30, 26, 23, 0.85) 0%, rgba(0,0,0,0) 60%);
  }
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 1.5vw;
  color: ${colors.textLight};
`;

export const SlideTitle = styled.h2`
  color: ${colors.textLight};
  font-size: 1.75rem;
  margin: 0 0 0.5rem 0;
  font-weight: bold;
`;

export const SlideSubtitle = styled.p`
  color: ${colors.textLightGray};
  margin: 0;
  font-size: 1rem;
`;