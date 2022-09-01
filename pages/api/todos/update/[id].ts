import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../prisma/instance';

const update = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { title } = req.body;
  try {
    const todo = await prisma.todo.update({
      where: {
        id: parseInt(id as string),
      },
      data: {
        title,
      },
    });
    return res.status(200).json(todo);
  } catch (err) {
    console.log(err);
  }
};

export default update;
