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
    ),
    app.use(
        "/rss/search",
        createProxyMiddleware({
            target: 'https://news.google.com/',
            changeOrigin: true,
        })
    ),
    app.use(
        "/test",
        createProxyMiddleware({
            target: 'http://127.0.0.1:5000/',
            changeOrigin: true,
        })
    )
}