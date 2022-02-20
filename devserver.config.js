module.exports = {
    proxy: {
        //'/api/*': 'http://url.of.prod.api/'
    },
    publicPaths: {
        //'/assets': 'assets'
    },
    mockPath: 'mock',
    app: '/dist/index.html', // this can also be an express app
    serverConfig: {}, // config for webpack-hot-server-middleware
    port: 4000, // 3000 by default
};