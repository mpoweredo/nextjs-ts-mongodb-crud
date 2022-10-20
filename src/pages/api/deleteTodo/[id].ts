import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== 'DELETE') return;

	const { id } = req.query;

	try {
		if (!id) throw new Error('No id provided');

		await prisma.todo.delete({
			where: {
				id: id as string,
			},
		});
		res.status(200).json({});
	} catch (error) {
		if (error instanceof Error) res.status(422).json({ message: error.message });
	}
}
