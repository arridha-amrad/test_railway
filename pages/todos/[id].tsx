import { Box, Button, Container } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Detail: NextPage = () => {
  document.title = 'Todo Detail';

  const router = useRouter();
  const todoId = router.query.id;
  const [todo, setTodo] = useState<Todo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const showTodo = async () => {
    try {
      const { data } = await axios.get(`/api/todos/${todoId}`);
      setTodo(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async () => {
    try {
      await axios.put('/api/todos');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log('router query : ', router.query);
    if (todoId) {
      showTodo();
    }
    // eslint-disable-next-line
  }, [todoId]);

  const TodoDetail = () => {
    return (
      <Box mb={2} bgColor={'blue.500'} color="white" p={2} rounded="full">
        {todo?.title}
        <Button onClick={() => {}} bgColor="red.500">
          Delete
        </Button>
        <Button bgColor="green.500">Update</Button>
      </Box>
    );
  };

  return (
    <Container>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Box mt={5}>
          <TodoDetail />
        </Box>
      )}
    </Container>
  );
};

export default Detail;
