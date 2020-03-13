// vue.config.js
module.exports = {
    assetsDir:'./',
    publicPath: './',
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3000',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}