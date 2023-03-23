import {IChannel} from "@/types/IChannel";

export default function Channel({ title, address }: IChannel) {
    return (
        <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${address}?autoplay=0&mute=1`} className="rounded"
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
        </iframe>
    )
}