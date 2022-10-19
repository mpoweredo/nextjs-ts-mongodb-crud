// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
		res.status(200).json({});
	} catch (error) {
		if (error instanceof Error) res.status(422).json({ message: error.message });
	}
}
