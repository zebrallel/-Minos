const Router = require('koa-router')
const router = new Router()

router.get('/test', (ctx, next) => {
    const AV = ctx.app.AV
    const query = new AV.Query('TodoModel')

    query.get('5a73fc65d50eee00771552da').then(res => {
        console.log(res.get('todos'))
        
        ctx.body = 'Hello'
    })
})

module.exports = router
