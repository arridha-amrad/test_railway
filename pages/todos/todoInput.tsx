import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import axios from 'axios';
import { FormEvent, useState } from 'react';

const TodoInput = () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post(
      '/api/todos/create',
      { title },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };
  return (
    <Box mb={3}>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <Button type="submit" variant="solid">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default TodoInput;
