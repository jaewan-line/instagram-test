import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Here you can handle the logic for when a user cancels the OAuth process
    // For example, you might want to log this event, clean up any session data, etc.

    res.status(200).json({ message: 'OAuth process cancelled' });
}