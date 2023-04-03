import type { NextApiRequest, NextApiResponse } from "next";

const channels = [
    {
        id: 1,
        title: "NTV",
        address: "XEJM4Hcgd3M",
        autoplay: true,
    },
    {
        id: 2,
        title: "HABERTÜRK",
        address: "SqHIO2zhxbA",
        autoplay: true,
    },
    {
        id: 3,
        title: "HABER GLOBAL",
        address: "UVPejgEw21c",
        autoplay: true,
    },
    {
        id: 4,
        title: "TRT HABER",
        address: "-Lrxv1_i3qc",
        autoplay: true,
    },
    {
        id: 5,
        title: "TV 100",
        address: "sd94keSra6A",
        autoplay: true,
    },
    {
        id: 6,
        title: "HALK TV",
        address: "r2ZgRoX2orE",
        autoplay: true,
    },
    {
        id: 7,
        title: "TGRT HABER",
        address: "gzmG_1SVy8Y",
        autoplay: true,
    },
    {
        id: 8,
        title: "KRT TV",
        address: "3QDiWPZ2D_k",
        autoplay: true,
    },
    {
        id: 9,
        title: "TELE1 ",
        address: "QAciOwhQMeo",
        autoplay: true,
    },
    {
        id: 10,
        title: "SÖZCÜ TV",
        address: "2i8lfP9oqvk",
        autoplay: true,
    },
    {
        id: 11,
        title: "ARTI TV",
        address: "xpoetRCJKqY",
        autoplay: true,
    },
    {
        id: 12,
        title: "ULUSAL KANAL",
        address: "uSRaHC2l8jY",
        autoplay: true,
    },
    {
        id: 13,
        title: "BLOOMBERG HT",
        address: "hHSmBJk6w0c",
        autoplay: true,
    },
    {
        id: 14,
        title: "TVNET",
        address: "UVW4-DQUVUU",
        autoplay: true,
    },
    {
        id: 15,
        title: "FLASH HABER TV",
        address: "oGHfM6AC7QU",
        autoplay: true,
    },
    {
        id: 16,
        title: "BENGÜTÜRK TV",
        address: "GKwLomZwX_k",
        autoplay: true,
    },
    {
        id: 17,
        title: "TV5",
        address: "d61pnTil_FU",
        autoplay: true,
    },
    {
        id: 18,
        title: "EKOTÜRK TV",
        address: "oeFbaX4qqxc",
        autoplay: true,
    },
];

export default function getChannels(
    req: NextApiRequest,
    res: NextApiResponse
): void {
    res.status(200).json({
        channels,
        channelsCount: channels.length,
    });
}
