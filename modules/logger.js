function Logger(ctx, next) {
    const req = ctx.request
    const res = ctx.response
    const infos = {
        date: new Date(),
        method: req.method,
        url: req.url,
        param: req.method.toLowerCase() === 'get' ? JSON.stringify(req.query) : JSON.stringify(req.body)
    }
    let logTpl = 'date ::: method ::: url ::: param'

    Object.keys(infos).forEach(function(key) {
        logTpl = logTpl.replace(key, infos[key])
    })

    console.log(logTpl);

    next()
}

module.exports = Logger
