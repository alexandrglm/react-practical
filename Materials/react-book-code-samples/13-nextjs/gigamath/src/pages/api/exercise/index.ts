import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (req.method === 'POST') {
        const type = String(req.body.type);
        const points = Number(req.body.points)
        const content = String(req.body.content);

        const result = await prisma.exercise.create({
            data: {
                type,
                content,
                points,
                finishedAt: new Date().toISOString(), 
                user: { connect: { email: String(session?.user?.email) } },
            },
        })

        return res.json(result)
    }
}