const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ["/member/**","/precedent/**","/chart/**","/post/**"],
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    ),
    app.use(
        "/kauth",
        createProxyMiddleware({
            target: 'https://kauth.kakao.com/',
            changeOrigin: true,
        })
    )
}