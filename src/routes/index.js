const Router = require('koa-router')
const router = new Router()
const todosRouter = require('./todos')

router.all('*', async (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', '*')
    ctx.response.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    await next()
})

router.use('/api/todos', todosRouter.routes())

module.exports = router
