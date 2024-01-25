import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
    message: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    if (req.method === 'GET') {
        res.status(200).json({ message: "Instagram Auth Mock Response" });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}