const log4js = require('log4js')

log4js.configure({
    appenders: {
        out: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '[%r] [%[%5.5p%]] - %m%n'
            }
        },
        access: {
            type: 'dateFile', // 日志文件类型，可以使用日期作为文件名的占位符
            filename: './logs/', // 日志文件名，可以设置相对路径或绝对路径
            pattern: 'aces.yyyy-MM-dd.log', // 占位符，紧跟在filename后面
            absolute: false, // filename是否绝对路径
            alwaysIncludePattern: true, // 文件名是否始终包含占位符
            layout: {
                type: 'messagePassThrough'
            }
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'info' },
        access: { appenders: ['access'], level: 'info' }
    }
})

module.exports = log4js
