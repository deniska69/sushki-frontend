import { io } from "socket.io-client";
import { API_URL } from "./config";

const socket = io(API_URL);

socket.on("connect", () => {
    //TODO issue: double connect
    console.log('\nsocket connect:', socket?.id);
});

const socketConnect = () => {
    socket.connect(API_URL, { forceNew: true });
}

export {
    socketConnect,
};