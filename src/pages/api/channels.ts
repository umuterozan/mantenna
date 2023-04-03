import type { NextApiRequest, NextApiResponse } from "next";
import channels from "@/data/channels.json";

export default function getChannels(
    req: NextApiRequest,
    res: NextApiResponse
): void {
    res.status(200).json({
        channels,
        channelsCount: channels.length,
    });
}
