// vue.config.js
module.exports = {
	publicPath: './',
	outputDir: 'dist',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://129.204.154.119:3000/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}