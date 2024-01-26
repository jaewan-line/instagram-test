import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Implement the logic to delete user data here
    // This could involve removing user records from a database or other data store

    res.status(200).json({ message: 'User data deleted successfully' });
}

/**
 * https://api.instagram.com/oauth/authorize
  ?client_id=730203325842173 
  &redirect_uri=https://test.linefriends-data.net/
  &scope=user_profile,user_media
  &response_type=code
 */

/**
 * https://test.linefriends-data.net/?code=AQC3oQuW3TNnPnKFcP9lM1vhHFO9JEYqS-zkWJ27KdleLz5BDZ1h7kohcMUGvJ4UDjgWVDl01EABVupeR-nd4CYQHBBQuE3kmdja1thB8ClCkQA3Fcl-3QoeY1eHtSyoYWtPOev45-raHA3uZkiuRIAc49yVqJzgKUsuDw2F7TqViDoyotL4zkVRtMrSfySpqx1VePl3S2LVz2dMocN-rZmI-5QzFofNpXu88hf6pwRCCQ#_
 */

/**
 * {
  "access_token": "IGQWRNcnRUdWwweFlkZA2h0UU9PQXlJRWotSG5Sc080RzlZAUXpvX1hEQ2x2TEJtckQwSU4xWm9WTzdWWHhDenlvQW85VEIyMm55OWQ1dmxGaFpVY1EyVV9IMXFacEVmYXBlQ3RHV21ZAeWx3T2p4VWtvU1p1d2dxbklsQzBQS1ZAGUWFEQQZDZD",
  "user_id": 7330248467064714
}
 */

/**
 * {
    "access_token": "IGQWRQdUZAYdEdsemFuZAzNFMGFPenY1UUZAFdC1oaTBrSnZA3cWFPVU5FUUp6bnUtcThGZAWpISFk0T3lRZAEFsZAVpwcGgzZAlZAMTnNSY2Rfa2FxVUdfZAElFRDl0SE03SE41Nm5EU0I4R0o4ZAi1ndwZDZD",
    "token_type": "bearer",
    "expires_in": 5184000
}
 */