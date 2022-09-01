import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/instance';

const show = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const todoId = parseInt(id as string);
  try {
    const todo = await prisma.todo.findFirst({ where: { id: todoId } });
    if (todo === null) {
      throw new Error('Todo not found');
    }
    return res.status(200).json(todo);
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
};

export default show;
