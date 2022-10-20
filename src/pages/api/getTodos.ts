// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'GET') return;

	try {
		const result = await prisma.todo.findMany({});
		res.status(200).json(result);
	} catch (error) {
		if (error instanceof Error) res.status(422).json({ message: error.message });
	}
}
