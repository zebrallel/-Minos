const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser');
const rootRouter = require('./routes')
const logger = require('./modules/logger')

app.use(bodyParser())
app.use(logger)
app.use(rootRouter)

app.listen(3000, '127.0.0.1', null, () => {
    console.log('Kow server is running on 3000!');
})