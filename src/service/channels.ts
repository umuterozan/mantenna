import {get} from "@/service/request";
export const getChannels = () => get("http://localhost:3000/api/channels")