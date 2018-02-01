const Router = require('koa-router')
const router = new Router()

router.all('*', (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
})

router.use('/api', require('./api'))

module.exports = router.routes()
