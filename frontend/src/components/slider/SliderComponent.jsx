import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

import {
  SliderWrapper,
  SlideImage,
  SlideContent,
  SlideTitle,
  SlideSubtitle
} from './Slider.styles';

export const Slider = () => {
  const slides = [
    { img: img1, title: 'Dobrodružstvá Sherlocka Holmesa', subtitle: 'Arthur Conan Doyle • Nesmrteľná detektívna klasika'},
    { img: img2, title: 'Meno ruže', subtitle: 'Umberto Eco • Historický detektívny román' },
    { img: img3,  title: 'Pýcha a predsudok', subtitle: 'Jane Austenová • Romantický príbeh sily citov'  },
    { img: img4, title: 'Harry Potter a Kameň Mudrcov', subtitle: 'J.K. Rowling • Čarodejnícka klasika' },
  ];

  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SlideImage $bg={slide.img}>
              <SlideContent>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideSubtitle>{slide.subtitle}</SlideSubtitle>
              </SlideContent>
            </SlideImage>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  );
};