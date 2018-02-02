const AV = require('leancloud-storage')
const APP_ID = 'tDWh95YBTS987JLAeD3Iof6Q-gzGzoHsz'
const APP_KEY = 'Fv1R2bydN1tlyNN4nIRveGXb'

function initStorage() {
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    })

    return AV
}

module.exports = initStorage
