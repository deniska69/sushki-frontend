import { io } from "socket.io-client";
import { API_URL } from "./config";

const socket = io(API_URL, {
    autoConnect: false
});

socket.on("connect", () => {
    console.log('\nsocket connect success:', socket?.id);
});

const socketConnect = () => {
    console.log('void connect to socket')
    socket.connect();
}

export {
    socketConnect,
};