import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { UserProps } from 'prisma/types';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (req.method === "PUT") {
        const id = (session?.user as UserProps).id;
        const name = String(req.body.name);

        const user = await prisma.user.update({
            where: { id: String(id) },
            data: { name },
        })

        return res.json(user);
    }
}