const Koa = require('koa');
const KoaRPC = require('./../index');
let app = new Koa();

app.use(KoaRPC);

app.use(async (ctx) => {
  let {remote, connect, err} = await ctx.rpc.connect(8080, 'localhost');
  let result1 = await remote.func1(3, 4);
  let result2 = await remote.func2(5, 6);
  
  connect.destroy();
  connect.end();
  ctx.body = `results are ${result1.data} ${result2.data}`;
});

app.listen(3000, ()=>{
  console.log('server is start at port 3000')
})
