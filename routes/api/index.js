const Router = require('koa-router')
const router = new Router()
const AV = require('leancloud-storage')

const APP_ID = 'tDWh95YBTS987JLAeD3Iof6Q-gzGzoHsz'
const APP_KEY = 'Fv1R2bydN1tlyNN4nIRveGXb'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

router.get('/todos', ctx => {
    const todos = [
        {
            content: 'aaa',
            completed: false
        }
    ]

    ctx.body = todos
})

router.get('/test', async ctx => {
    const TodoModel = AV.Object.extend('TodoModel')
    const tm = new TodoModel()
    await tm.save({ name: 'callie' })

    ctx.body = 'success!'
})

module.exports = router.routes()
