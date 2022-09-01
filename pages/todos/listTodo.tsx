import { List } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const refEffect = useRef<boolean>(false);

  const getTodos = async () => {
    const { data } = await axios.get('/api/todos');
    setTodos(data);
  };

  useEffect(() => {
    if (!refEffect.current) {
      getTodos();
    }
    return () => {
      refEffect.current = true;
    };
  }, [todos]);

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
