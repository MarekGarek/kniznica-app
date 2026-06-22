import React from 'react';
import { Divider, Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { Slider } from '../../components/slider/SliderComponent'; 
import { BookShelf } from '../../components/bookShelf/BookShelfComponent';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

import z1 from '../../assets/books/z1.jpg';
import z2 from '../../assets/books/z2.webp';
import z3 from '../../assets/books/z3.webp';
import h from '../../assets/books/h1.jpg';
import h1 from '../../assets/books/h.jpg';
import h2 from '../../assets/books/h2.jpg';
import h3 from '../../assets/books/h3.jpg';
import p from '../../assets/books/p.webp';


export const HomePage = () => {

  const fantasyBooks = [
    { id: 201, title: 'Zaklínač I: Posledné želanie', author: 'Andrzej Sapkowski', img: z1 },
    { id: 202, title: 'Zaklínač II: Meč osudu', author: 'Andrzej Sapkowski', img: z2 },
    { id: 203, title: 'Zaklínač III: Krv elfov', author: 'Andrzej Sapkowski', img: z3 },
    { id: 204, title: 'Hobit', author: 'J.R.R. Tolkien', img: h },
    { id: 205, title: 'Pán Prsteňov: Spoločenstvo Prsteňa', author: 'J.R.R. Tolkien', img: p },
    { id: 206, title: 'Harry Potter 1: Kameň mudrcov', author: 'J.K. Rowling', img: h1 },
    { id: 207, title: 'Harry Potter 2: Tajomná komnata', author: 'J.K. Rowling', img: h2 },
    { id: 208, title: 'Harry Potter 3: Väzeň z Azkabanu', author: 'J.K. Rowling', img: h3 },
  ];

  return (
    <div style={{ padding: '1vw', maxWidth: '90vw', margin: '0 auto' }}>
      
      <Slider />
      <BookShelf title="Najpopulárnejšia fantasy klasika" books={fantasyBooks} />
      <Divider/>
      <BookShelf title="Najpopulárnejšia fantasy klasika" books={fantasyBooks} />
      <Divider/>
   

    </div>
  );
};

export default HomePage;