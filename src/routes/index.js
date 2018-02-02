const Router = require('koa-router')
const router = new Router()
const apiRouter = require('./api')

router.all('*', (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
})

router.use('/api', await apiRouter.routes())

// 未命中任何一个路由规则。404页面或json。
router.use(ctx => {
    switch (ctx.method.toLowerCase()) {
        case 'post':
            return (ctx.body = { status: -1, msg: '404', message: '系统繁忙，请稍后再试!' })
        case 'get':
            return (ctx.body = 'page 404!')
    }
})

module.exports = router
