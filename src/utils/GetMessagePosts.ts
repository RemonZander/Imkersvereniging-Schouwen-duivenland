import request from "../axios/axios.ts/axios";

export const getMessagePosts = async () => {
    return request.get('/service/messages');
};