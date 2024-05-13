import {URL_API} from '@src/utils/constant';
import {io} from 'socket.io-client';

let socket = null;
export const initSocket = userId => {
  socket = io(URL_API, {transports: ['websocket'], query: {userId}});

  socket.on('connect', () => {
    console.log('Socket connected');
  });
  socket.on('disconnect', () => {
    socket.emit('stop-watching');
    console.log('Socket disconnected');
  });
};
export const getSocket = () => {
  return socket;
};
