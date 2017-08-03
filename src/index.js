const AsyncRPC = require('async-rpc');
const rpc = new AsyncRPC();

async function koaRPC( ctx, next ) {
  let _rpc = {
    connect(port, host) {
      return rpc.connect(port, host);
    }
  }
  ctx.rpc = _rpc;
  if ( typeof next === 'function' ) {
    await next();
  }
};

module.exports = koaRPC;

