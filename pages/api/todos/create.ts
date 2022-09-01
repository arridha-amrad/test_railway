import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/instance';

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title } = req.body;
  const todo = await prisma.todo.create({
    data: {
      title,
    },
  });
  return res.status(200).json(todo);
};

export default create;
