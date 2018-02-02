const AV = require('leancloud-storage')
const APP_ID = 'tDWh95YBTS987JLAeD3Iof6Q-gzGzoHsz'
const APP_KEY = 'Fv1R2bydN1tlyNN4nIRveGXb'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

async function save() {
    const TodoModel = AV.Object.extend('TodoModel')
    const tm = new TodoModel()

    const todos = [
        {
            content: 'ccc',
            completed: false
        },
        {
            content: 'ddd',
            completed: true
        }
    ]

    tm.set('todos', todos)

    const res = await tm.save(tm)

    console.log(res.id)

    return res.id
}

async function read(id) {
    const query = new AV.Query('TodoModel')
    const res = await query.get(id)

    return res.get('todos')
}

// save().then(id => {
//     read(id).then(result => {
//         console.log(result)
//     })
// })

async function update(id){
    const query = new AV.Query('TodoModel')
    const tm = AV.Object.createWithoutData('TodoModel', id)
    const res = await query.get(id)
    const prev = res.get('todos')
    prev.push({
        content: 'abc',
        completed: false
    })
    tm.set('todos', prev)
    tm.save()
}

update('5a73fc65d50eee00771552da')
