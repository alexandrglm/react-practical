import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const name = String(req.query.name)

        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)

        return result.data;
    }
}