export default function getVideoId(url: any) {
    let videoId = "";
    if (url.includes("youtu.be/")) {
        videoId = url.split("/").pop();
    } else if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("v=").pop().split("&")[0];
    }

    return videoId;
}
