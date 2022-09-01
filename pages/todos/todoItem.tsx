import { Box, ListItem } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface IProps {
  todo: Todo;
}

const TodoItem: FC<IProps> = ({ todo }) => {
  const navigate = useRouter();
  if (!todo) {
    return null;
  }
  return (
    <ListItem>
      <Box
        onClick={() => navigate.push(`/todos/${todo.id}`)}
        mb={2}
        bgColor={'blue.500'}
        color="white"
        p={2}
        rounded="full"
      >
        {todo.title}
      </Box>
    </ListItem>
  );
};

export default TodoItem;
