type props = {
    title: string,
    address: string
}

export default function Channel({ title, address }: props) {
    return (
        <iframe width="100%" height="100%" src={`https://www.youtube-nocookie.com/embed/${address}?autoplay=0&mute=1`} className="aspect-video"
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
        </iframe>
    )
}