const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        ["/member/**", "/precedent/**", "/chart/**", "/post/**", "/statute/**"],
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    ),
        app.use(
            ["/kauth", "/oauth/**"],
            createProxyMiddleware({
                target: 'https://kauth.kakao.com',
                changeOrigin: true,
            })
        ),
        app.use(
            ["/hoho"],
            createProxyMiddleware({
                target: 'https://accounts.kakao.com',
                changeOrigin: true,
            })
        ),
        app.use(
            ["/v2/user"],
            createProxyMiddleware({
                target: 'kapi.kakao.com',
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