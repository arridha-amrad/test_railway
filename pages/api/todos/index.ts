import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../prisma/instance';

export default async function getTodos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const todos = await prisma?.todo.findMany();
  return res.status(200).json(todos);
}
