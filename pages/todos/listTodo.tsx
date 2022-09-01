import { List } from '@chakra-ui/react';
import { Todo } from '@prisma/client';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import TodoItem from './todoItem';

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const refEffect = useRef<boolean>(false);

  const getTodos = async () => {
    try {
      const { data } = await axios.get('/api/todos');
      setTodos(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
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
      {isLoading ? (
        <p>loading...</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </List>
  );
};

export default TodoList;
