import type { NextApiRequest, NextApiResponse } from "next";
import channels from "@/data/channels.json";
import { IChannel } from "@/types/IChannel";

export default function getChannels(req: NextApiRequest, res: NextApiResponse<IChannel[]>): void {
    res.status(200).json(channels)
}