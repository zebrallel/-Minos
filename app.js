const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    ctx.body = 'Hello Koa!'
})

app.listen(3000, '127.0.0.1', null, () => {
    console.log('Kow server is running on 3000!');
})