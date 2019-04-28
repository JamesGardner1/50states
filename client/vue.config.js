// Tells Vue to send requests to API to server
module.exports = {
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
}