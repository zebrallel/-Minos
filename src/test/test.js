const AV = require('leancloud-storage')
const APP_ID = 'tDWh95YBTS987JLAeD3Iof6Q-gzGzoHsz'
const APP_KEY = 'Fv1R2bydN1tlyNN4nIRveGXb'

function initStorage() {
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    })

}

initStorage()

async function go(){
    const query = new AV.Query('TodoModel')
    const res = await query.get('5a73fc65d50eee00771552da')

    console.log(res.get('todos'));
    console.log('done!');
}

go()