// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

type Data = {
	title: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	if (req.method !== 'POST') return;
	const { title } = req.body;

	try {
		if (title.trim().length === 0) return;

		await prisma.todo.create({
			data: {
				title,
				isCompleted: false,
			},
		});
		res.status(200);
	} catch (error) {
		res.status(422);
	}
}
