import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import TodoList from './todos/listTodo';
import TodoInput from './todos/todoInput';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todo List</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Box mt={4}>
        <Container>
          <TodoInput />
          <TodoList />
        </Container>
      </Box>
    </>
  );
};

export default Home;
