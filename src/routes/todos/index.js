const Router = require('koa-router')
const router = new Router()

router.post('/save', async (ctx, next) => {
    const { date, content } = ctx.request.body
    const TodoModel = ctx.app.AV.Object.extend('TodoModel')
    const item = new TodoModel()

    item.set('date', date)
    item.set('content', content)
    item.set('completed', false)

    try {
        const res = await item.save()

        ctx.body = { code: 0, message: 'success', data: { id: res.id } }
    } catch (error) {
        ctx.body = { code: -1, message: error.rawMessage, error }
    }
})

router.get('/query/:year-:month-:day', async (ctx, next) => {
    const { year, month, day } = ctx.params
    const dateQuery = new ctx.app.AV.Query('TodoModel')

    dateQuery.equalTo('date', `${year}-${month}-${day}`)

    try {
        const results = await dateQuery.find()
        const data = results.map(item => {
            const { date, content, completed } = item.attributes

            return {
                id: item.id,
                date,
                content,
                completed
            }
        })

        ctx.body = { code: 0, message: 'success', data }
    } catch (error) {
        ctx.body = { code: -1, message: error.rawMessage, error }
    }
})

router.post('/update', async (ctx, next) => {
    const { id, content, date, completed } = ctx.request.body
    const todo = ctx.app.AV.Object.createWithoutData('TodoModel', id)

    todo.set('content', content)
    todo.set('completed', completed === 'true')
    todo.set('date', date)

    try {
        await todo.save()
        ctx.body = { code: 0, message: 'success' }
    } catch (error) {
        ctx.body = { code: -1, message: error.rawMessage, error }
    }
})

module.exports = router
