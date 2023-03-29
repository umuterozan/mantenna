import type { NextApiRequest, NextApiResponse } from "next";
import channels from "@/data/channels.json";
import { IChannel } from "@/types/IChannel";

export default function getChannels(req: NextApiRequest, res: NextApiResponse): void {
    res.status(200).json({
        selectedChannels: channels.filter((channel: IChannel) => channel.isSelected),
        unselectedChannels: channels.filter((channel: IChannel) => !channel.isSelected)
    })
}