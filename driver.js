'use strict';


const io = require('socket.io-client');
const host = 'http://localhost:3331';
const caps = io.connect(host);


caps.on('driverpickup', pickUp);


// events.on('inTransit', inTransit);

function pickUp(payload) {
  console.log('Package awaiting delivery');
  setTimeout(() => {
    console.log('picking up', payload.orderId);
    caps.emit('in-transit', payload);
  }, 1500)
  setTimeout(() => {
    caps.emit('delivered', payload);
  }, 3000)
}

module.exports = pickUp;

