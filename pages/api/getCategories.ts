import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';

type Data = {
    categories: Category[];
};

const query = groq`*[_type == "category"] {
_id,
...
}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const categories = await sanityClient.fetch(query);
    res.status(200).json({ categories });
}
