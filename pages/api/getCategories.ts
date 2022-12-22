import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    categories: Category[];
};

export default function (req: NextApiRequest, res: NextApiResponse<Data>): void {
    // const categories = await sanityClient.fetch(query);
}
