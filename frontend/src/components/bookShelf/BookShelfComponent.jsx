import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BookCard } from './BookCardComponent';
import { ShelfWrapper, ShelfTitle } from './BookShelf.styles';
import 'swiper/css';

export const BookShelf = ({ title, books }) => {
  return (
    <ShelfWrapper>
      <ShelfTitle>{title}</ShelfTitle>
      
      <Swiper
        spaceBetween={24}
        slidesPerView={1.5}
        breakpoints={{
          480: { slidesPerView: 2.2 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5 },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ShelfWrapper>
  );
};