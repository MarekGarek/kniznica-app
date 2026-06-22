import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardWrapper,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
} from './BookShelf.styles';
import { Typography, Button } from 'antd';

const { Text } = Typography;

export const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <CardWrapper>
      <CardImage $bg={book.img} />
      <CardContent>
        <CardTitle>{book.title}</CardTitle>

        <Text>
          {book.author}
        </Text>

        <CardFooter>
          <Button type='primary' onClick={() => navigate(`/books`)}>
            Požičať
          </Button>
        </CardFooter>
      </CardContent>
    </CardWrapper>
  );
};