import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import TodoList from './todos/listTodo';
import TodoInput from './todos/todoInput';

const Home: NextPage = () => {
  document.title = 'Home';
  return (
    <Box mt={4}>
      <Container>
        <TodoInput />
        <TodoList />
      </Container>
    </Box>
  );
};

export default Home;
