const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    devServer: {
        host: '0.0.0.0',//your ip address
        port: 3000,
        disableHostCheck: true,
    }
}