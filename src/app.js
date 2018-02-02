const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const logger = require('./modules/logger')
const initStorage = require('./modules/storage')

// 初始化存储服务
app.AV = initStorage()

app.use(bodyParser())
app.use(logger)

const Counter = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('WFT?')
        }, 3000)
    })
}

app.use(async ctx => {
    if (ctx.url === '/api/test') {
        console.log(111)
        const res = await Counter()
        console.log(123)
        console.log(res)
        ctx.body = 'success!'
    } else {
        ctx.body = '404!'
    }
})

app.on('error', err => {
    console.log.error(err)
})

app.listen(3000, '127.0.0.1', null, () => {
    console.log('Kow server is running on 3000!')
})
